---
slug: openwrt-napic-fccm3308
title: NapiWRT - инструкция по сборке OpenWrt
authors: dmn
tags: [openwrt napic fccm3308]
---

> Пошаговая инструкция по сборке кастомной прошивки OpenWrt для плат NapiLab Napi-C/P/Slot на базе Rockchip RK3308 и компьютеров на основе Napi-C (FCC3308, FCM3308). Включает все необходимые патчи, DTS, uci-defaults скрипты и конфигурацию. Особенно интересно для устройств с двумя Ethernet (FCM3308).

---

## 1. Подготовка хост-машины (Ubuntu/Debian)

```bash
sudo apt install build-essential clang flex bison g++ gawk gcc-multilib \
  gettext git libncurses-dev libssl-dev python3-distutils python3-setuptools \
  python3-pyelftools swig rsync unzip zlib1g-dev help2man
```

---

## 2. Клонирование OpenWrt

```bash
git clone https://github.com/openwrt/openwrt.git ~/openwrt
cd ~/openwrt
./scripts/feeds update -a
./scripts/feeds install -a
```

---

## 3. Кастомизации

Все изменения вносятся в чистое дерево OpenWrt. Ниже - полный список файлов и модификаций.

### 3.1. Патч U-Boot defconfig

Файл: `package/boot/uboot-rockchip/patches/108-board-rockchip-add-napilab-napic.patch`

Этот патч добавляет defconfig для NapiLab Napi-C в систему сборки U-Boot. Копируется из репозитория napi-openwrt-build.

### 3.2. Блок U-Boot в Makefile

В файле `package/boot/uboot-rockchip/Makefile` нужно добавить определение устройства napic и включить его в список целей сборки.

**Добавить блок определения** после `U-Boot/rock-pi-s-rk3308` (перед строкой `# RK3328 boards`):

```makefile
define U-Boot/napic-rk3308
  $(U-Boot/rk3308/Default)
  DEPENDS+=+PACKAGE_u-boot-$(1):trusted-firmware-a-rk3308-tpl-rock-pi-s
  TPL:=rk3308_ddr_589MHz_uart0_m0_v2.10.bin
  NAME:=NapiLab Napi-C
  BUILD_DEVICES:= \
    napilab_napic
endef
```

Команда для вставки:

```bash
sed -i '/^# RK3328 boards/i\
define U-Boot/napic-rk3308\
  $(U-Boot/rk3308/Default)\
  DEPENDS+=+PACKAGE_u-boot-$(1):trusted-firmware-a-rk3308-tpl-rock-pi-s\
  TPL:=rk3308_ddr_589MHz_uart0_m0_v2.10.bin\
  NAME:=NapiLab Napi-C\
  BUILD_DEVICES:= \\\
    napilab_napic\
endef' package/boot/uboot-rockchip/Makefile
```

**Ограничить UBOOT_TARGETS** только платами RK3308 (иначе сборка падает на отсутствующих ATF для rk3399 и др.):

Найти блок `UBOOT_TARGETS := \` и заменить весь список на:

```makefile
UBOOT_TARGETS := \
  rock-pi-s-rk3308 \
  napic-rk3308
```

### 3.3. Профиль устройства в armv8.mk

В файл `target/linux/rockchip/image/armv8.mk` добавить в конец:

```makefile
define Device/napilab_napic
  $(Device/rk3308)
  DEVICE_VENDOR := NapiLab
  DEVICE_MODEL := Napi-C
  DEVICE_DTS := rk3308-napi-c
  SUPPORTED_DEVICES := napilab,napic radxa,rockpis
  BOOT_SCRIPT := rock-pi-s
  UBOOT_DEVICE_NAME := napic-rk3308
  DEVICE_PACKAGES := \
  kmod-rtw88-8723ds \
  kmod-usb-net-cdc-ncm \
  kmod-usb-net-rndis \
  wpad-basic-mbedtls \
  kmod-fs-ext4 \
  kmod-fs-msdos \
  kmod-fs-vfat \
  kmod-fs-exfat \
  kmod-fs-ntfs3 \
  kmod-usb-storage \
  kmod-usb-serial-option \
  kmod-usb-net-qmi-wwan \
  uqmi \
  minicom \
  htop \
  nano \
  lsblk \
  usbutils \
  tcpdump \
  ethtool \
  mosquitto \
  mosquitto-client \
  screen \
  xz-utils \
  mbpoll \
  openssh-sftp-server \
  bash \
  luci-ssl \
  luci-theme-openwrt-2020 \
  luci-proto-qmi \
  luci-app-mbusd
endef
TARGET_DEVICES += napilab_napic
```

### 3.4. Device Tree (DTS)

Файл: `target/linux/rockchip/files/arch/arm64/boot/dts/rockchip/rk3308-napi-c.dts`

Основан на Rock Pi S, ключевые отличия:

- `uart1`, `uart2`, `uart4` включены (RS-485, дополнительные последовательные порты)
- Bluetooth не используется (занимает UART)
- USB OTG контроллер (`usb20_otg`) переключён в режим host - без этого USB-устройства на OTG-порте не видны:

```dts
&usb20_otg {
    dr_mode = "host";
    status = "okay";
};
```

> **Важно:** без `dr_mode = "host"` модуль `dwc2` инициализируется в режиме gadget и USB-устройства (например, USB-Ethernet адаптеры) не определяются.

### 3.5. Пакеты

Скопировать в `package/`:

- `package/luci-app-mbusd/` - LuCI веб-интерфейс для Modbus-шлюза mbusd
- `package/luci-app-mbpoll/` - LuCI веб-интерфейс для Modbus-поллера
- `package/mbscan/` - утилита сканирования Modbus RTU шины (содержит `Makefile` + `src/mbscan.c`)

### 3.6. Файлы прошивки (files/)

Все файлы в директории `files/` копируются в корневую ФС образа при сборке.

#### files/etc/shadow

Пароль root по умолчанию (хеш генерируется через `openssl passwd -6`):

```bash
HASH=$(openssl passwd -6)
echo "root:${HASH}:19000:0:99999:7:::" > files/etc/shadow
chmod 640 files/etc/shadow
```

#### files/etc/banner

Кастомный баннер при логине.

#### files/etc/profile.d/10-sysinfo.sh

Скрипт вывода информации об интерфейсах при логине:

```sh
#!/bin/sh

echo ""
for iface in /sys/class/net/eth*; do
    name=$(basename "$iface")
    ip=$(ip -4 addr show "$name" 2>/dev/null | awk '/inet /{print $2}')
    state=$(cat "$iface/operstate" 2>/dev/null)
    [ -z "$ip" ] && ip="no address"
    echo " $name: $ip ($state)"
done
echo ""
```

#### files/etc/uci-defaults/

Скрипты первого старта (выполняются один раз и удаляются):

| Скрипт | Назначение |
|--------|-----------|
| `70-rootpt-resize` | Расширяет раздел до конца носителя, перезагружает |
| `80-rootfs-resize` | Расширяет ФС через losetup + resize2fs, перезагружает |
| `91-bash` | Меняет shell root на /bin/bash |
| `92-timezone` | Устанавливает MSK-3 (Москва) |
| `93-console-password` | Включает пароль на серийной консоли ttyS0 |
| `94-macaddr` | Генерирует стабильный MAC из OTP-памяти чипа |
| `95-network` | Настройка сети: 1 интерфейс - DHCP; 2 - eth0=lan/static, eth1=wan/dhcp; 3+ - eth2+ в бридж с eth0 |
| `96-hostname` | Устанавливает hostname napiwrt |
| `97-luci-theme` | Тема openwrt-2020 |
| `98-firewall-wan` | Зона wan + правила SSH/HTTP/HTTPS на wan |
| `99-dhcp` | Отключает DHCP-сервер если одна сетевуха |

##### 70-rootpt-resize

```sh
if [ ! -e /etc/rootpt-resize ] \
&& type parted > /dev/null \
&& lock -n /var/lock/root-resize
then
ROOT_BLK="$(readlink -f /sys/dev/block/"$(awk -e \
'$9=="/dev/root"{print $3}' /proc/self/mountinfo)")"
ROOT_DISK="/dev/$(basename "${ROOT_BLK%/*}")"
ROOT_PART="${ROOT_BLK##*[^0-9]}"
parted -f -s "${ROOT_DISK}" resizepart "${ROOT_PART}" 100%
mount_root done
touch /etc/rootpt-resize
reboot
fi
exit 1
```

##### 80-rootfs-resize

```sh
if [ ! -e /etc/rootfs-resize ] \
&& [ -e /etc/rootpt-resize ] \
&& type losetup > /dev/null \
&& type resize2fs > /dev/null \
&& lock -n /var/lock/root-resize
then
ROOT_BLK="$(readlink -f /sys/dev/block/"$(awk -e \
'$9=="/dev/root"{print $3}' /proc/self/mountinfo)")"
ROOT_DEV="/dev/${ROOT_BLK##*/}"
LOOP_DEV="$(losetup -f)"
losetup "${LOOP_DEV}" "${ROOT_DEV}"
resize2fs -f "${LOOP_DEV}"
losetup -d "${LOOP_DEV}"
mount_root done
touch /etc/rootfs-resize
reboot
fi
exit 1
```

##### 91-bash

```sh
#!/bin/sh
sed -i 's|/bin/ash|/bin/bash|' /etc/passwd
```

##### 92-timezone

```sh
#!/bin/sh
uci set system.@system[0].timezone='MSK-3'
uci set system.@system[0].zonename='Europe/Moscow'
uci commit system
```

##### 93-console-password

```sh
#!/bin/sh
uci set system.@system[0].ttylogin='1'
uci commit system
```

##### 94-macaddr

```sh
#!/bin/sh
MAC=$(cat /sys/bus/nvmem/devices/rockchip-otp0/nvmem | md5sum | \
  sed 's/\(..\)\(..\)\(..\)\(..\)\(..\)\(..\).*/02:\1:\2:\3:\4:\5/')
uci set network.lan.macaddr="$MAC"
uci commit network
```

##### 95-network

```sh
#!/bin/sh

# Убираем дефолтный бридж
uci -q delete network.@device[0]

if [ -e /sys/class/net/eth1 ]; then
    # Две+ сетевухи: eth0=lan, eth1=wan

    # Собираем дополнительные интерфейсы (eth2, eth3...) в бридж
    EXTRA=""
    for iface in /sys/class/net/eth*; do
        name=$(basename "$iface")
        [ "$name" = "eth0" ] && continue
        [ "$name" = "eth1" ] && continue
        EXTRA="$EXTRA $name"
    done

    if [ -n "$EXTRA" ]; then
        # Есть eth2+ : бридж из eth0 + extras
        uci set network.br_lan=device
        uci set network.br_lan.type='bridge'
        uci set network.br_lan.name='br-lan'
        uci add_list network.br_lan.ports='eth0'
        for iface in $EXTRA; do
            uci add_list network.br_lan.ports="$iface"
        done
        uci set network.lan.device='br-lan'
    else
        # Только eth0 + eth1
        uci set network.lan.device='eth0'
    fi

    uci set network.lan.proto='static'
    uci set network.lan.ipaddr='192.168.1.1/24'

    # wan = eth1 (USB сетевушка)
    uci -q delete network.wan
    uci set network.wan=interface
    uci set network.wan.device='eth1'
    uci set network.wan.proto='dhcp'
else
    # Одна сетевуха: lan=dhcp
    uci set network.lan.device='eth0'
    uci set network.lan.proto='dhcp'
    uci -q delete network.lan.ipaddr
fi

uci commit network
```

##### 96-hostname

```sh
#!/bin/sh
uci set system.@system[0].hostname='napiwrt'
uci commit system
```

##### 97-luci-theme

```sh
#!/bin/sh
uci set luci.main.mediaurlbase='/luci-static/openwrt-2020'
uci commit luci
```

##### 98-firewall-wan

```sh
#!/bin/sh
[ -e /sys/class/net/eth1 ] || exit 0

# Включаем masq на дефолтной зоне wan (если ещё не включён)
uci set firewall.@zone[1].masq='1'
uci set firewall.@zone[1].mtu_fix='1'
uci commit firewall

# SSH на wan
uci add firewall rule
uci set firewall.@rule[-1].name='Allow-SSH-WAN'
uci set firewall.@rule[-1].src='wan'
uci set firewall.@rule[-1].dest_port='22'
uci set firewall.@rule[-1].proto='tcp'
uci set firewall.@rule[-1].target='ACCEPT'

# HTTP на wan
uci add firewall rule
uci set firewall.@rule[-1].name='Allow-HTTP-WAN'
uci set firewall.@rule[-1].src='wan'
uci set firewall.@rule[-1].dest_port='80'
uci set firewall.@rule[-1].proto='tcp'
uci set firewall.@rule[-1].target='ACCEPT'

# HTTPS на wan
uci add firewall rule
uci set firewall.@rule[-1].name='Allow-HTTPS-WAN'
uci set firewall.@rule[-1].src='wan'
uci set firewall.@rule[-1].dest_port='443'
uci set firewall.@rule[-1].proto='tcp'
uci set firewall.@rule[-1].target='ACCEPT'

uci commit firewall
```

##### 99-dhcp

```sh
#!/bin/sh
if [ ! -e /sys/class/net/eth1 ]; then
    # Одна сетевуха - не раздаём DHCP
    uci set dhcp.lan.ignore='1'
fi
uci commit dhcp
```

---

## 4. Конфигурация (.config)

Скопировать `.config` из репозитория napi-openwrt-build. Обязательные пакеты, которые должны быть включены:

```
CONFIG_PACKAGE_kmod-usb-dwc2=y
CONFIG_PACKAGE_kmod-usb-net-smsc95xx=y
CONFIG_PACKAGE_kmod-usb-gadget=y
CONFIG_PACKAGE_kmod-lib-crc16=y
CONFIG_PACKAGE_kmod-net-selftests=y
CONFIG_PACKAGE_kmod-phy-smsc=y
CONFIG_PACKAGE_parted=y
CONFIG_PACKAGE_losetup=y
CONFIG_PACKAGE_resize2fs=y
CONFIG_PACKAGE_luci-app-mbusd=y
CONFIG_PACKAGE_luci-app-mbpoll=y
CONFIG_PACKAGE_mbscan=y
CONFIG_PACKAGE_mbusd=y
CONFIG_PACKAGE_mbpoll=y
```

Добавление пакетов в `.config` (никогда не запускать `make menuconfig` или `make defconfig` после!):

```bash
for pkg in kmod-usb-dwc2 kmod-usb-net-smsc95xx kmod-usb-gadget kmod-lib-crc16 \
  kmod-net-selftests kmod-phy-smsc parted losetup resize2fs; do
  sed -i "/$pkg/d" .config
  echo "CONFIG_PACKAGE_$pkg=y" >> .config
done
```

---

## 5. Сборка

### Первая сборка

```bash
cd ~/openwrt
make package/boot/arm-trusted-firmware-rockchip/compile -j$(nproc)
make package/boot/uboot-rockchip/compile -j$(nproc)
make -j$(nproc) EXTRA_IMAGE_NAME=$(date +%d%b_%H%M)
```

### Пересборка после изменений

```bash
make -j$(nproc) EXTRA_IMAGE_NAME=$(date +%d%b_%H%M)
```

### Результат

```
bin/targets/rockchip/armv8/openwrt-ДАТА-rockchip-armv8-napilab_napic-ext4-sysupgrade.img.gz
```

---

## 6. Прошивка

```bash
gunzip openwrt-*-napilab_napic-ext4-sysupgrade.img.gz
dd if=openwrt-*-napilab_napic-ext4-sysupgrade.img of=/dev/sdX bs=4M status=progress
sync
```

> Внимательно проверьте `/dev/sdX` командой `lsblk` перед записью!

---

## 7. Первый запуск

При первом старте на новом носителе происходит:

1. Скрипт `70-rootpt-resize` расширяет раздел - перезагрузка
2. Скрипт `80-rootfs-resize` расширяет ФС - перезагрузка
3. Остальные uci-defaults применяются - система готова

Итого: две автоматических перезагрузки, после чего устройство полностью настроено.

### Доступ

| Параметр | Одна сетевуха | Две сетевухи |
|----------|--------------|-------------|
| eth0 (LAN) | DHCP-клиент | 192.168.1.1 (static) |
| eth1 (WAN) | - | DHCP-клиент |
| SSH | root@IP | root@IP (lan и wan) |
| LuCI | http://IP/ | http://IP/ (lan и wan) |
| Консоль | ttyS0, 1500000 бод | ttyS0, 1500000 бод |

---

## 8. Перенос сборки на другую машину

Переносить нужно **только кастомизации**, не build_dir/staging_dir. Список файлов для переноса:

```bash
tar czf napi-custom.tar.gz \
  .config \
  files/ \
  target/linux/rockchip/files/ \
  target/linux/rockchip/image/armv8.mk \
  package/boot/uboot-rockchip/patches/108-board-rockchip-add-napilab-napic.patch \
  package/boot/uboot-rockchip/Makefile \
  package/luci-app-mbusd/ \
  package/luci-app-mbpoll/ \
  package/mbscan/
```

На новой машине:

```bash
git clone https://github.com/openwrt/openwrt.git ~/openwrt
cd ~/openwrt
./scripts/feeds update -a
./scripts/feeds install -a
tar xzf napi-custom.tar.gz
make -j$(nproc) EXTRA_IMAGE_NAME=$(date +%d%b_%H%M)
```

> **Важно:** `armv8.mk` и `package/boot/uboot-rockchip/Makefile` из архива перезапишут оригинальные файлы OpenWrt. Если версия OpenWrt сильно отличается, эти файлы нужно мержить вручную - добавлять блоки napic в актуальные файлы новой версии.

---

## 9. Известные грабли

- **Никогда не запускать `make menuconfig` или `make defconfig`** после ручной правки `.config` - они перезапишут кастомные записи
- **Добавление пакетов**: только через `sed -i '/<pkg>/d' .config && echo 'CONFIG_PACKAGE_<pkg>=y' >> .config`
- **build_dir/staging_dir содержат абсолютные пути** - при переносе между машинами всегда `make distclean` (сохранив `.config`)
- **UBOOT_TARGETS нужно ограничивать** - без ATF для rk3399/rk3588 сборка U-Boot падает
- **`dr_mode = "host"` обязателен** для USB OTG - без него dwc2 уходит в gadget-режим
- **`files/etc/shadow`** не должен содержать пароль в открытом виде - только хеш через `openssl passwd -6`
- **USB-Ethernet (SMSC LAN9500)** требует пакеты: `kmod-usb-dwc2`, `kmod-usb-net-smsc95xx`, `kmod-usb-gadget`, `kmod-lib-crc16`, `kmod-net-selftests`, `kmod-phy-smsc`

---

## Лицензия

GPL-2.0 - следуем лицензии OpenWrt. Все кастомизации открыты.
