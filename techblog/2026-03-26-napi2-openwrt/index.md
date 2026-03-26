---
slug: napi2-openwrt-support
title: NAPI2 поддерживает OpenWRT
authors: dmn
tags: [napiworld, napi2, openwrt, linux]
---

>OpenWrt для NapiLab NAPI2 (RK3568): готовая прошивка и сборка из исходников

NapiWRT теперь поддерживает **[NAPI2](/docs/napi2)** на базе Rockchip RK3568. Готовый образ можно скачать и залить на SD\eMMC, а можно собрать самостоятельно из открытых исходников.

---

## Что такое NAPI2

NAPI2 - промышленный IoT-шлюз NapiLab на базе Rockchip RK3568:

| Параметр | Значение |
|----------|----------|
| CPU | Cortex-A55 × 4, 2.0 ГГц |
| RAM | 4 ГБ DDR4 |
| Хранилище | 32 ГБ eMMC + SD |
| Ethernet | 2× Gigabit (LAN + WAN + NAT) |
| USB | USB 2.0 + USB 3.0 OTG |
| RS-485 | UART7, аппаратный RTS |
| CAN | CAN 2.0 |
| HDMI | HDMI 2.0, framebuffer-консоль |
| RTC | DS1338 |

Два гигабитных порта и NAT означают, что NAPI2 может одновременно работать как маршрутизатор между промышленной и офисной сетью и как Modbus TCP шлюз.

---

## Скачать готовый образ

Готовые образы публикуются в GitHub Releases:

**→ [github.com/lab240/napi-openwrt-build/releases](https://github.com/lab240/napi-openwrt-build/releases)**

Файл прошивки: `openwrt-rockchip-armv8-napi2-rk3568-ext4-sysupgrade.img.gz`

### Запись на eMMC

eMMC - встроенная память, напрямую с хост-машины к ней не подключиться. Процедура прошивки:

1. Загрузите NAPI2 с SD-карты (любой рабочий Linux-образ)
2. Подключите USB-накопитель с файлом прошивки
3. Смонтируйте USB и запишите образ на eMMC:

```bash
# Монтируем USB-накопитель
mount /dev/sda1 /mnt

# Распаковываем образ
gunzip /mnt/openwrt-rockchip-armv8-napi2-rk3568-ext4-sysupgrade.img.gz

# Записываем на eMMC
dd if=/mnt/openwrt-rockchip-armv8-napi2-rk3568-ext4-sysupgrade.img \
   of=/dev/mmcblk0 bs=4M status=progress
sync
```

4. Выключите устройство, извлеките SD-карту, подайте питание - NAPI2 загрузится с eMMC.

> Проверьте имя устройства eMMC через `lsblk` - обычно это `/dev/mmcblk0`.

После подачи питания система автоматически расширит корневой раздел на весь носитель (две перезагрузки при первом старте), применит все настройки и будет готова к работе.

### Доступ по умолчанию

| Параметр | Значение |
|----------|----------|
| LAN | eth0, 192.168.1.1 (статика) |
| WAN | eth1, DHCP |
| Веб-интерфейс | http://192.168.1.1/ |
| SSH | root@192.168.1.1 |
| Консоль | ttyS2, 1 500 000 бод + HDMI |

---

## Что в прошивке из коробки

Прошивка содержит полный промышленный стек:

- **Modbus TCP** - `mbusd` + `luci-app-mbusd` (RS-485 на UART7 → TCP)
- **Modbus-сканер** - `mbpoll` + `luci-app-mbpoll`, `mbscan`
- **MQTT** - `mosquitto` уже настроен и запущен
- **Метрики** - `collectd` с модулями mqtt, rrdtool, modbus
- **1-Wire** - `owfs` / `owserver` для датчиков DS18B20
- **I2C / GPIO** - `i2c-tools`, `gpiod-tools`
- **LTE** - поддержка Quectel EP06 через QMI
- **HDMI-консоль** - лог ядра и вход на мониторе, USB-клавиатура

NAPI2 также готова к запуску Zigbee2MQTT - 4 ГБ RAM более чем достаточно. Готовый архив Z2M для musl/aarch64 есть в тех же Releases.

---

## Ключевые возможности

- **Двойной Ethernet** - eth0 (LAN, 192.168.1.1) + eth1 (WAN, DHCP). NAT и маршрутизация настроены из коробки.
- **HDMI-консоль** - framebuffer + DRM VOP2 встроены в ядро. Лог загрузки выводится одновременно на serial и HDMI. Подключите монитор и USB-клавиатуру - полноценный локальный доступ без USB-UART адаптера.
- **RS-485 с аппаратным RTS** - UART7 (`/dev/ttyS7`) с автоматическим управлением направлением передачи. Не нужен GPIO для переключения приём/передача.
- **CAN 2.0** - для подключения промышленного оборудования с CAN-интерфейсом.
- **RTC DS1338** - аппаратные часы на I2C5, время сохраняется при выключении питания.
- **MAC из eMMC CID** - стабильный MAC-адрес генерируется из уникального идентификатора eMMC (отдельные MAC для LAN и WAN).

---

## Собрать самостоятельно

Исходники кастомизаций открыты:

**→ [github.com/lab240/napi-openwrt-build](https://github.com/lab240/napi-openwrt-build)**

### Зависимости

```bash
sudo apt install build-essential clang flex bison g++ gawk gcc-multilib \
  gettext git libncurses-dev libssl-dev python3-distutils python3-setuptools \
  python3-dev python3-pyelftools rsync swig unzip zlib1g-dev
```

### Сборка

```bash
# Клонируем OpenWrt
git clone https://github.com/openwrt/openwrt.git
cd openwrt
./scripts/feeds update -a
./scripts/feeds install -a

# Накладываем кастомизации NAPI2
cp -r /path/to/napi-openwrt/napi2-files/* .

# Применяем конфиг ядра для HDMI
bash apply-kernel-config.sh

# Сначала собираем NanoPi R5S (нужен U-Boot от того же RK3568)
echo 'CONFIG_TARGET_rockchip_armv8_DEVICE_friendlyarm_nanopi-r5s=y' >> .config
make defconfig
make -j$(nproc)

# Переключаемся на NAPI2
sed -i '/DEVICE_friendlyarm_nanopi-r5s/d' .config
echo 'CONFIG_TARGET_rockchip_armv8_DEVICE_napi2-rk3568=y' >> .config
make defconfig
make -j$(nproc)
```

Результат появится в `bin/targets/rockchip/armv8/`.

> Первая сборка занимает 30–60 минут (компилируется тулчейн). Пересборка с изменениями - 5–10 минут.

### Зачем двухэтапная сборка

U-Boot для RK3568 берётся из конфигурации NanoPi R5S - это та же SoC, и defconfig от FriendlyElec хорошо поддерживается в апстриме OpenWrt. Первый проход собирает U-Boot, второй - финальный образ с нашим Device Tree и конфигурацией.

---

## Ссылки

- Готовые образы: [github.com/lab240/napi-openwrt-build/releases](https://github.com/lab240/napi-openwrt-build/releases)
- Исходники сборки: [github.com/lab240/napi-openwrt-build](https://github.com/lab240/napi-openwrt-build)
- Документация по платам: [github.com/napilab/napi-boards](https://github.com/napilab/napi-boards)
