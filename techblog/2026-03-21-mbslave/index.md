---
slug: mbslave
title: Утилита modbus-slave. Эмулятор Modbus RTU датчиков
authors: dmn
description: "Как эмулировать до 30 Modbus RTU устройств на одном COM порту, подавать реальные данные датчиков и запустить всё как системный сервис"
tags: [modbus, napi, napi-c, napi-p, napi-slot, linux, mbscan]
---

>Когда разрабатываешь систему мониторинга или SCADA, часто нужно протестировать
опрос датчиков — но реального оборудования под рукой нет. Или нужно показать
демо заказчику без физических устройств. Или хочется отладить логику мастера
не выезжая на объект.

Именно для этого мы написали **modbus_slave** — эмулятор Modbus RTU slave устройств
на C, который работает на Linux и Windows, не требует зависимостей и умеет отдавать
реальные данные из файлов.

## Что умеет

- Эмулирует **до 30 независимых Modbus RTU устройств** на одном последовательном порту
- Каждое устройство отвечает на **FC03** (Read Holding Registers), **20 регистров**
- Значения регистров — **случайные** (для тестирования) или из **файла** (реальные данные)
- Работает на **Linux x86_64**, **aarch64** (NAPI2, RK3568, Raspberry Pi) и **Windows x64**
- Поддерживает **RS-485** — RTS direction control через DTS/GPIO
- Режим **демона** с логами в syslog и **systemd service** для автозапуска
- **Защита от устаревших данных** — если скрипт-источник упал, регистры возвращают нули
- Один **статический бинарь** без зависимостей — скопировал и запустил

## Архитектура

Идея простая: один процесс слушает RS-485 шину и отвечает на запросы от любого
из 30 адресов. Для мастера это выглядит как несколько физических устройств на линии —
он не видит разницы.

```
Мастер (PC/ПЛК)          RS-485 шина          modbus_slave (NAPI2)
  mbpoll -a 1    ──────────────────────────►   slave ID 1 → /tmp/cpu.dat
  mbpoll -a 2    ──────────────────────────►   slave ID 2 → /tmp/time.dat
  mbpoll -a 3    ──────────────────────────►   slave ID 3 → random
```

Регистры читаются из обычных текстовых файлов — одно число на строку.
Файлы живут в `/tmp` (tmpfs — RAM диск), SD карта не изнашивается.

## Быстрый старт

### Установка на NAPI2 / aarch64

```bash
# Скачать статический бинарь
wget https://github.com/lab240/modpoll-slave/raw/main/bin/modbus_slave_aarch64
chmod +x modbus_slave_aarch64

# Запустить — 3 датчика, порт ttyS7
./modbus_slave_aarch64 -p /dev/ttyS7 -b 115200 -a 3
```

### Запуск на Windows

```cmd
modbus_slave.exe -p COM4 -b 115200 -a 3
```

### Проверка с mbpoll

```bash
mbpoll -m rtu -b 115200 -P none -a 1 -r 1 -c 20 /dev/ttyUSB0
```

## Реальные данные из файлов

Самое интересное — каждому slave можно привязать файл с реальными значениями.
Формат простой: одно целое число на строку.

```bash
# Запуск: slave 1 читает данные CPU, slave 2 — время, slave 3 — рандом
./modbus_slave -p /dev/ttyS7 -b 115200 -a 3 \
    -f 1:/tmp/cpu.dat \
    -f 2:/tmp/time.dat
```

Файл обновляется внешним скриптом атомарно через `mv` — никакой гонки данных:

```bash
# Температура ядер CPU (°C × 100)
while true; do
    for zone in /sys/class/thermal/thermal_zone*/temp; do
        val=$(( $(cat $zone) / 10 ))
        echo $val
    done > /tmp/cpu.tmp
    mv /tmp/cpu.tmp /tmp/cpu.dat
    sleep 5
done
```

Значение `4523` в регистре означает 45.23 °C — стандартное соглашение
для передачи дробных чисел в Modbus.

## Защита от падения скриптов

Если скрипт обновления данных упал — файл перестаёт обновляться,
но данные в нём остаются старые. Мастер продолжал бы читать устаревшие значения.

Параметр `-t` задаёт максимальный возраст файла:

```bash
./modbus_slave -p /dev/ttyS7 -b 115200 -f 1:/tmp/cpu.dat -t 10
```

Если файл не обновлялся более 10 секунд — все регистры возвращают **0**.
Это сразу видно мастеру и SCADA системе. В лог пишется предупреждение
(не чаще раза в минуту чтобы не спамить):

```
file /tmp/cpu.dat is stale (45s > 10s), returning zeros
```

По умолчанию `t=10`. Отключить: `-t 0`.

## Режим демона и systemd

```bash
# Запуск как демон
./modbus_slave -d -p /dev/ttyS7 -b 115200 -a 3 -f 1:/tmp/cpu.dat

# Статус
./modbus_slave -s

# Остановка
./modbus_slave -k

# Логи
journalctl -t modbus_slave -f
```

Для автозапуска при загрузке — systemd service:

```bash
sudo cp modbus_slave /usr/local/bin/
sudo cp service/modbus_slave.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now modbus_slave
```

Статистика запросов пишется в лог каждые 60 секунд:

```
stats: slaves=3 total_ok=12480 total_err=0
```

## Windows

На Windows всё то же самое, только порт называется `COM4` вместо `/dev/ttyS7`,
файлы в `C:\temp\` вместо `/tmp/`, и `-bg` вместо `-d`:

```cmd
modbus_slave.exe -bg -p COM4 -b 115200 -a 3 ^
    -f 1:C:\temp\cpu.dat ^
    -f 2:C:\temp\time.dat
```

Логи пишутся в `C:\temp\modbus_slave.log`.

## Сборка из исходников

Код разделён на три файла:

| Файл | Содержимое |
|------|------------|
| `modbus_core.h` | Вся логика Modbus: CRC16, FC03, файлы, статистика |
| `modbus_slave.c` | Linux: termios, fork, syslog, /proc |
| `modbus_slave_win.c` | Windows: Win32 API, CreateFile, DCB |

```bash
# Linux x86_64
gcc -O2 -Wall -o modbus_slave src/modbus_slave.c

# Linux aarch64 статический
aarch64-linux-gnu-gcc -O2 -Wall -static -o modbus_slave_aarch64 src/modbus_slave.c

# Windows .exe с Linux
x86_64-w64-mingw32-gcc -O2 -Wall -o modbus_slave.exe src/modbus_slave_win.c
```

## Итог

`modbus_slave` решает конкретную задачу — дать возможность разрабатывать
и тестировать Modbus мастер без реального железа, или превратить одноплатный
компьютер в многоканальный шлюз данных в Modbus.

Код открытый, собирается одной командой, работает на том же NAPI2 где и
всё остальное.

**Репозиторий:** [github.com/lab240/modpoll-slave](https://github.com/lab240/modpoll-slave)
