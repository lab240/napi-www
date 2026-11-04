---
slug: napi-c-crash-debug
title: "NAPI-C (RK3308): подготовка ядра и системы к поиску причин паники и перезагрузки"
authors: dmn
tags: [napi-c, rk3308, linux, kernel, armbian, uboot, debug]
description: "Что настроить заранее, чтобы при падении NAPI-C получить текст ошибки: опции ядра, ramoops/pstore через оверлей, sysctl, журнал, сторож и возврат загрузки на SD-карту при сбое."
keywords: [napi-c, rk3308, kernel panic, ramoops, pstore, kfence, kasan, watchdog, armbian, u-boot, boot.cmd, отладка ядра]
---

# NAPI-C (RK3308): как подготовить ядро и систему к поиску причин паники и перезагрузки

Что настроить заранее, чтобы при падении или зависании платы получить текст ошибки, а не
«плата перезагрузилась, причина неизвестна». Без этих настроек упавшая под нагрузкой плата не
оставляет ни строчки: проверки в ядре срабатывают, но текст ошибки некуда сохранить.


<!--truncate-->

## 0. Принцип: цепочка из четырёх звеньев

Каждое падение должно пройти всю цепочку, иначе отладка бесполезна:

1. **Обнаружить** — ядро должно заметить ошибку (проверки, детекторы зависаний).
2. **Превратить в панику** — тихое зависание или WARN должны стать паникой с текстом,
   иначе плату просто перезагрузит аппаратный сторож без единого слова.
3. **Сохранить** — текст паники должен пережить перезагрузку (ramoops/pstore) или уйти наружу
   по каналу, который работает даже в момент паники (последовательная консоль).
4. **Не затереть** — после перезагрузки плата должна загрузить ту же систему и прочитать дамп,
   а не другое ядро, которое перепишет память.

Если ошибки «случайные» и задевают не связанные между собой объекты (чужие процессы, файлы в
кэше, initrd), до отладки ядра стоит проверить саму плату: `memtester` на 30 мин при
остановленной нагрузке и, если есть, такая же вторая плата под той же нагрузкой.

## 1. Ядро: опции конфигурации

Что есть в штатном ядре Armbian 6.18 и что стоит включить в отладочную сборку:

| Опция | Штатно | Зачем |
|---|---|---|
| `CONFIG_PSTORE`, `CONFIG_PSTORE_RAM` | y, m | основа: дамп паники в RAM, переживает тёплую перезагрузку |
| `CONFIG_PSTORE_CONSOLE` | нет | весь консольный вывод последних секунд, а не только kmsg_dump при панике |
| `CONFIG_PSTORE_PMSG` | нет | `/dev/pmsg0`: пользовательские метки (blackbox) прямо в pstore |
| `CONFIG_SOFTLOCKUP_DETECTOR` | **нет** | CPU завис в ядре > 2×`watchdog_thresh` → сообщение/паника |
| `CONFIG_HARDLOCKUP_DETECTOR` + `_BUDDY` | **нет** | зависание с выключенными прерываниями; на RK3308 (GIC-400, нет pseudo-NMI) работает только «buddy»-вариант: соседний CPU замечает замёрзший |
| `CONFIG_DETECT_HUNG_TASK` | **нет** | задача в D-состоянии > N секунд |
| `CONFIG_KFENCE` | **нет** | дешёвый (можно держать в работе) выборочный детектор use-after-free и выходов за границы; ловит редкие UAF за часы работы |
| `CONFIG_SLUB_DEBUG` | y | включается параметром `slub_debug=` без пересборки |
| `CONFIG_KASAN` (generic) | нет | самый точный детектор UAF, но ×2–3 по памяти и CPU; на 512 МБ — только для коротких прогонов |
| `CONFIG_DEBUG_LIST`, `CONFIG_BUG_ON_DATA_CORRUPTION` | нет | порча списков (типично при UAF URB) → сразу BUG с местом, а не падение позже |
| `CONFIG_DEBUG_OBJECTS_WORK`/`_TIMERS` | нет | освобождение работающего work/timer — родственный класс ошибок |
| `CONFIG_PROVE_LOCKING` (lockdep) | нет | ошибки блокировок; тяжёлый, для отдельного прогона |
| `CONFIG_WATCHDOG_PRETIMEOUT_GOV_PANIC` | **нет** | у `dw_wdt` есть pretimeout: за N секунд до аппаратного сброса — паника с дампом. Превращает «молчаливый» сброс сторожем в текст |
| `CONFIG_KALLSYMS_ALL` | нет | имена и данных в стеке |
| `CONFIG_DEBUG_INFO` | y | **сохранять `vmlinux` и модули с символами** от каждой сборки, иначе стек не расшифровать |
| `CONFIG_NETCONSOLE`, `CONFIG_USB_MON`, `CONFIG_MAGIC_SYSRQ` | m, m, y | есть |

Для поиска одной конкретной ошибки лучше две сборки: «долгая» (KFENCE, детекторы зависаний,
DEBUG_LIST, pretimeout — почти без замедления, чтобы не спугнуть гонку) и «точная»
(KASAN/lockdep — короткие прогоны).

## 2. Device Tree: память для ramoops

В DT Armbian для NAPI-C нет `reserved-memory` для ramoops, поэтому pstore не работал.
Решение — пользовательский оверлей `/boot/overlay-user/napi-ramoops.dtbo`, в `armbianEnv.txt`:
`user_overlays=napi-ramoops`.

```dts
/dts-v1/;
/plugin/;
/ {
	fragment@0 {
		target-path = "/";
		__overlay__ {
			reserved-memory {
				#address-cells = <2>;
				#size-cells = <2>;
				ranges;
				ramoops@f000000 {
					compatible = "ramoops";
					reg = <0x0 0x0f000000 0x0 0x100000>;	/* 1 МиБ на 240 МиБ */
					record-size = <0x20000>;
					console-size = <0x20000>;
					max-reason = <2>;			/* oops и panic */
				};
			};
		};
	};
};
```

Сборка на плате: `dtc -@ -I dts -O dtb -o /boot/overlay-user/napi-ramoops.dtbo napi-ramoops.dts`.

⚠ **Не загружать `ramoops` без зарезервированной памяти.** `modprobe ramoops mem_address=...` на
системе, где этот участок не вынесен в `reserved-memory`, пишет поверх памяти, которой уже
пользуется ядро, и портит работающую систему. Только через оверлей.
Модуль: `echo ramoops > /etc/modules-load.d/napi-ramoops.conf`.

Адрес выбран так, чтобы его не трогал U-Boot (он перемещает себя в верх памяти, ядро грузит с
0x00280000, initrd около 0x0a200000). Признак успеха в `dmesg`:
`ramoops: using 0x100000@0xf000000`.

**Важно:** при загрузке `systemd-pstore.service` переносит файлы из `/sys/fs/pstore` в
`/var/lib/systemd/pstore/` — смотреть надо там, а не в `/sys/fs/pstore`.

## 3. Параметры загрузки (armbianEnv.txt, `extraargs`)

- `rcupdate.rcu_cpu_stall_timeout=10` — RCU stall через 10 с (по умолчанию 21 с, позже сторожа).
- `slub_debug=FZPU,kmalloc-1k,kmalloc-2k` — проверки только нужных кешей (здесь kmalloc-1k/2k);
  полный `slub_debug=FZPU` дорог на 512 МБ.
- `kfence.sample_interval=10` (если KFENCE собран) — чаще выборка, выше шанс поймать.
- `ftrace_dump_on_oops` + трассировка нужной подсистемы в кольцевой буфер — при панике хвост трассы
  уходит в консоль/pstore (нужен `PSTORE_CONSOLE` и запас размера).
- `printk.devkmsg=on` — запись меток в `/dev/kmsg` без ограничения частоты.
- `kasan_multi_shot` (если собран KASAN) — по умолчанию KASAN сообщает только **первую** ошибку
  и замолкает: если первой окажется безобидная находка при загрузке, настоящую ошибку KASAN уже
  не покажет. С `kasan_multi_shot` — все отчёты (но может засыпать консоль, если безобидная
  ошибка повторяется).

## 4. sysctl (`/etc/sysctl.d/`)

```
kernel.panic = 10                 # перезагрузка через 10 с после паники
kernel.panic_on_oops = 1
kernel.panic_on_warn = 0          # 0, пока нужен текст WARN в журнале; 1 — если важнее дамп в pstore
kernel.panic_on_rcu_stall = 1
kernel.softlockup_panic = 1       # если собран детектор
kernel.hardlockup_panic = 1       # если собран детектор
kernel.hung_task_panic = 1        # если собран детектор
kernel.watchdog_thresh = 5        # soft lockup через 10 с — раньше 30-секундного сторожа
kernel.panic_print = 0x47         # при панике: задачи, память, таймеры + бэктрейс всех CPU
```

Компромисс `panic_on_warn`: при 1 любое WARN (например, `refcount_t: addition on 0`) сразу даёт дамп в
pstore, но плата перезагружается и тест обрывается; при 0 WARN только в журнале, а порча памяти
идёт дальше. Для поиска use-after-free — 1, если журнал не сохраняется надёжно.

## 5. systemd и журнал

- **Журнал на диск, без ramlog.** На Armbian журнал по умолчанию в RAM (`armbian-ramlog`) и
  сбрасывается на диск раз в сутки — при падении теряется всё. Сделать:
  `ENABLED=false` в `/etc/default/armbian-ramlog`, и
  `/etc/systemd/journald.conf.d/90-napi-persistent.conf`:
  `[Journal] Storage=persistent  SyncIntervalSec=10s`. Сообщения ядра уровня crit и выше
  journald пишет на диск сразу.
- **Аппаратный сторож:** `/etc/systemd/system.conf.d/90-watchdog.conf`:
  `RuntimeWatchdogSec=30s`, `RebootWatchdogSec=2min`. Плюс pretimeout (п. 1):
  `echo 10 > /sys/class/watchdog/watchdog0/pretimeout`, governor `panic`.
- **Чёрный ящик** — скрипт, раз в секунду пишущий в файл состояние (IRQ/с, загрузку, память,
  потоки шлюза) с `sync -d` после каждой строки. Показывает, умерла плата мгновенно или
  что-то нарастало. С `PSTORE_PMSG` его можно писать и в `/dev/pmsg0`.

## 6. Внешние каналы (то, что работает в момент паники)

| Канал | В момент паники | Замечания |
|---|---|---|
| Последовательная консоль ttyS0, 1 500 000 бод | **да**, самый надёжный | нужен второй компьютер/плата с USB-UART, пишущий в файл (`picocom --logfile`, `grabserial`) |
| ramoops/pstore | да (тёплая перезагрузка) | см. п. 2, проверять `sysrq c` |
| netconsole (UDP) | частично | нужен маршрут от платы до приёмника (через NAT/VPN в одну сторону не работает) |
| `dmesg -w` по SSH | **нет** | годится только для WARN и отчётов, которые не убивают сеть |
| Журнал на диске | почти нет | последние секунды перед паникой обычно не успевают |

## 7. Стратегия загрузки (NAND + SD): возврат на SD-карту при сбое

Идея: **SD-карта — надёжная «домашняя» система**, SD NAND (встроенная, `mmcblk0`) — испытуемая
(новое или отладочное ядро). Плата по умолчанию грузит SD-карту; на NAND она уходит только по
флагу, и любая следующая перезагрузка (в том числе сброс аппаратным сторожем после зависания)
возвращает её на SD. Удалённую плату так не потерять из-за неудачного ядра.

### 7.1. Как это устроено

U-Boot NAPI-C сначала ищет `boot.scr` на SD-карте (так с Armbian U-Boot; проверить
по консоли UART: `Boot script loaded from mmc 1`). В начало `boot.cmd` **SD-карты** добавлен
блок, который читает «флаг» — первые 4 байта сырого сектора 30000 (0x7530) этой же карты,
вне разделов (раздел начинается с 32768):

| Флаг | Что делает U-Boot |
|---|---|
| `NAND` | стирает флаг (пишет нули в сектор) и грузит систему с SD NAND — **один раз** |
| `PERM` | грузит SD NAND всегда, флаг не трогает |
| иначе | обычная загрузка SD-карты |

Если на NAND не нашёлся `boot.scr`, грузится SD-карта. Флаг стирается **до** запуска ядра,
поэтому, что бы ни случилось с ядром NAND (паника, зависание, нет сети), после перезагрузки
плата окажется на SD.

Блок для `/boot/boot.cmd` SD-карты — сразу после строк `setenv ... default values`, до
`test -n "${distro_bootpart}"`:

```
# Boot the SD NAND system (mmc 0) on request. Flag: raw sector 30000 (0x7530) of this SD card.
#   "NAND" - boot SD NAND once; the flag is cleared before the kernel starts.
#   "PERM" - boot SD NAND always.
setenv napi_flag_addr 0x9400000
setenv napi_nand 0
if mmc dev ${devnum} && mmc read ${napi_flag_addr} 0x7530 1; then
	if itest.l *${napi_flag_addr} == 0x444e414e; then
		echo "napi: one-shot boot from SD NAND (mmc 0), clearing the flag"
		mw.l ${napi_flag_addr} 0 0x80
		mmc write ${napi_flag_addr} 0x7530 1
		setenv napi_nand 1
	elif itest.l *${napi_flag_addr} == 0x4d524550; then
		echo "napi: permanent boot from SD NAND (mmc 0)"
		setenv napi_nand 1
	fi
fi
if test "${napi_nand}" = "1"; then
	setenv napi_sd_devnum ${devnum}
	setenv devtype mmc
	setenv devnum 0
	setenv distro_bootpart 1
	if load mmc 0:1 0x9500000 ${prefix}boot.scr; then
		source 0x9500000
	fi
	echo "napi: SD NAND boot failed, booting the SD card"
	setenv devnum ${napi_sd_devnum}
fi
setenv napi_nand
```

`0x444e414e` и `0x4d524550` — это строки `NAND` и `PERM`, прочитанные как 32-битное число
(little-endian). После правки — пересобрать скрипт:

```
mkimage -C none -A arm -T script -d /boot/boot.cmd /boot/boot.scr
```

⚠ `boot.cmd` в Armbian помечен «DO NOT EDIT»: обновление пакета U-Boot/ядра может его
перезаписать — после обновлений проверять, что блок на месте (`grep napi_flag /boot/boot.cmd`).

### 7.2. Управление флагом (из Linux)

На SD-системе SD-карта — `mmcblk1`; то же имя и в системе NAND (номера задаются алиасами DT).
Перед записью проверить: `lsblk -o NAME,SIZE,MODEL` — `mmcblk1` должна быть SD-картой.

```
# один раз загрузить NAND
printf NAND | dd of=/dev/mmcblk1 bs=512 seek=30000 conv=sync,notrunc && sync && systemctl reboot
# всегда грузить NAND
printf PERM | dd of=/dev/mmcblk1 bs=512 seek=30000 conv=sync,notrunc && sync
# вернуть SD-карту (стереть флаг)
dd if=/dev/zero of=/dev/mmcblk1 bs=512 seek=30000 count=1 conv=notrunc && sync
# посмотреть флаг
dd if=/dev/mmcblk1 bs=512 skip=30000 count=1 2>/dev/null | head -c 4; echo
```

### 7.3. Что должно вернуть плату на SD

Флаг сам по себе только **разрешает** вернуться — перезагрузку должно что-то вызвать:

1. **Аппаратный сторож** (п. 5, `RuntimeWatchdogSec=30s` в системе NAND): ядро или systemd
   зависли — через 30 с сброс. ⚠ Сторож запускает systemd, поэтому зависание **до** старта
   systemd (ранняя загрузка ядра, initrd) сторож не поймает — тогда нужен человек.
2. **Паника → перезагрузка:** `panic=10` добавить в `extraargs` системы NAND — так он действует
   с первых секунд загрузки, а не только после применения sysctl.
3. **Ядро загрузилось, но связи нет** (сеть не поднялась, ssh не работает) — сторож доволен,
   плата «жива», но недоступна. Для этого в системе NAND таймер-страховка: через 15 мин после
   загрузки, если нет файла `/root/keep-nand`, — перезагрузка (и возврат на SD):

```
# /etc/systemd/system/napi-keep-nand.service
[Unit]
Description=Go back to the SD card system unless /root/keep-nand exists

[Service]
Type=oneshot
ExecStart=/bin/sh -c '[ -e /root/keep-nand ] || { echo "no /root/keep-nand, rebooting to the SD card system"; systemctl reboot; }'

# /etc/systemd/system/napi-keep-nand.timer
[Unit]
Description=15 min after boot check /root/keep-nand

[Timer]
OnBootSec=15min

[Install]
WantedBy=timers.target
```

`systemctl enable napi-keep-nand.timer`. Зашли по ssh и всё в порядке — `touch /root/keep-nand`
(файл лежит на NAND и действует на все следующие загрузки; убрать — `rm`).

### 7.4. Порядок работы с новым ядром

1. Ставим ядро в систему NAND (из SD-системы через chroot или из самой NAND), `keep-nand` нет.
2. **Первая загрузка — только флаг `NAND`** (один раз). Не поднялось — через 30 с (сторож) или
   15 мин (таймер) плата сама вернётся на SD. С `PERM` сразу неудачное ядро может увести плату в
   бесконечный цикл перезагрузок без связи.
3. Ядро поднялось, сеть и ssh есть, п. 8 пройден — `touch /root/keep-nand` и флаг **`PERM`**.
   Теперь после паники плата возвращается на ту же NAND-систему и `systemd-pstore` забирает дамп.
   С флагом `NAND` плата после паники ушла бы на SD — дамп некуда забрать, а другое ядро может
   переписать память.
4. Закончили — стереть флаг (п. 7.2): плата снова грузит SD-карту.

## 8. Проверка до начала теста (обязательно)

1. `dmesg | grep ramoops` — регион занят.
2. `echo marker > /dev/kmsg; echo c > /proc/sysrq-trigger` — искусственная паника.
3. После перезагрузки: `/var/lib/systemd/pstore/dmesg-ramoops-0` содержит `marker` и
   `Kernel panic - not syncing: sysrq triggered crash`. Проверено на NAPI-C.
4. `journalctl -b -1` — журнал прошлой загрузки есть до последних секунд.
5. Поток `dmesg -w` и оповещения запущены и видят метку.

Причину аппаратного сброса можно дополнительно читать из регистра статуса сброса CRU
(`GLB_RST_ST`, смещение — по TRM RK3308): сброс сторожем отличим от программной перезагрузки.

## 9. Разбор дампа

- Стек: `scripts/decode_stacktrace.sh vmlinux < dmesg-ramoops-0` (нужен `vmlinux` этой сборки).
- Отдельный адрес: `scripts/faddr2line vmlinux usb_hcd_submit_urb+0x1c4/0x6a0`.
- Отчёты SLUB (`Poison overwritten`, `Redzone`) содержат стеки выделения и освобождения объекта —
  именно то, что нужно для use-after-free.

## 10. Минимум для рабочих плат

Без отладочного ядра и почти бесплатно: аппаратный сторож и `panic`-настройки (п. 4, 5), журнал
на диске (п. 5), ramoops через оверлей (п. 2) — тогда любое падение оставит текст. Отладочные
параметры (`slub_debug`, `kasan_multi_shot` и т. п.) на рабочих платах — убрать.
