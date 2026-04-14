---
slug: debian-napic
title: Debian для NAPI-C с ядром 6.6
authors: dmn
tags: [debian napic]
description: "Сборочная система для создания готового образа Debian Trixie (arm64) с ядром 6.6 для NAPI-C на Rockchip RK3308."
keywords: [debian, napi-c, rk3308, ядро 6.6, образ, armbian, arm64, trixie, uboot]
---

# NapiDebian - собираем Debian для Napi-C

Сборочная система для создания готового образа Debian (trixie) под одноплатный компьютер Napi-C на базе Rockchip RK3308.

## Готовые образы для прошивки и исходный код

Готовые образы: https://download.napilinux.ru/linuximg/napic/debian/

Наисвежайшая информация м сборочная система на GitHub: https://github.com/lab240/napi-debian-build

### Подключённые репозитории

- `http://deb.debian.org/debian` - основной Debian
- `https://deb.napilab.net` - пакеты NapiLab (ядра, утилиты)
- `https://repo.napilab.ru` - дополнительные пакеты (mbusd и др.)


## Что в образе

- **Debian trixie** (arm64)
- **Ядро 6.6.x** (vendor Rockchip, собирается из исходников или устанавливается из deb)
- **U-Boot 2023.10**
- Поддержка Device Tree Overlays (UART, I2C, USB host, SPI и др.)
- Автоматическое расширение раздела при первом запуске


### Предустановленные пакеты

Базовые: ssh, NetworkManager, sudo, nano, curl, ntpsec, initramfs-tools, locales

Из `packages.list`: vim, net-tools, can-utils, mbpoll, minicom, tcpdump, screen, memtester, xxd, tree, util-linux-extra, mosquitto, mosquitto-clients, i2c-tools, python3-pymodbus, python3-pip, python3-smbus2, git, tmux, make, cmake, gcc, build-essential, flex, bison, libssl-dev, pkg-config, mbusd

### Overlays по умолчанию

```
rk3308-uart0 rk3308-uart1 rk3308-uart2-m0 rk3308-uart3-m0
rk3308-i2c1-ds1338 rk3308-i2c3-m0 rk3308-usb20-host
```

Настраиваются в `/boot/uEnv.txt`.

## Учётные данные

- **root** / napilinux
- **napi** / napilinux (sudo)

## Быстрый старт

### Сборка образа из готовых deb

Положить deb-пакеты ядра в `kernel-rk-6.6/` и запустить:

```bash
sudo ./mkimg.sh
```

Готовый образ появится в `artifacts-trixie/`.

### Сборка с компиляцией ядра из исходников

```bash
sudo ./mkimg.sh --build-kernel
```

Исходники клонируются из `https://gitlab.nnz-ipc.net/pub/napilinux/kernel.git` (ветка `rk-6.6`), собранные deb сохраняются в `kernel-rk-6.6/`.

### Только сборка ядра (без образа)

```bash
sudo bash -c '
source config.sh
BUILD_KERNEL=1
source scripts/00-build-kernel.sh
'
```

### Прошивка на SD-карту

```bash
xzcat artifacts-trixie/Debian-napilab_*.img.xz | sudo dd of=/dev/sdX bs=4M status=progress
sync
```

## Параметры сборки

### Аргументы командной строки

| Аргумент | Описание |
|---|---|
| `--build-kernel` | Собрать ядро из исходников |
| `--branch=rk-6.6` | Ветка ядра (каталог `kernel-<branch>`) |
| `--skip-uboot` | Не прошивать U-Boot в образ |
| `--skip-xz` | Не сжимать образ (для отладки) |

### Переменные окружения

| Переменная | По умолчанию | Описание |
|---|---|---|
| `KERNEL_VER` | 6.6.89 | Версия ядра |
| `IMAGE_SIZE` | 2048 | Размер образа в MB |
| `DISTRIBUTION` | trixie | Релиз Debian |
| `EXTRA_PKGS` | - | Дополнительные пакеты через запятую |
| `HOSTNAME_TARGET` | napic | Hostname платы |

Примеры:

```bash
# Другая ветка ядра
sudo ./mkimg.sh --branch=rk-6.1

# Увеличенный образ с доп. пакетами
sudo IMAGE_SIZE=4096 EXTRA_PKGS=docker.io ./mkimg.sh
```

## Структура проекта

```
make-napi-debian/
├── config.sh                     # конфигурация сборки
├── mkimg.sh                      # главный скрипт
├── packages.list                 # дополнительные пакеты
├── napi-archive-keyring.asc      # ключ репозитория deb.napilab.net
├── u-boot-latest_*.deb           # U-Boot
├── kernel-rk-6.6/               # deb-пакеты ядра
│   ├── linux-image-*.deb
│   └── linux-headers-*.deb
├── scripts/
│   ├── 00-build-kernel.sh        # [опц.] сборка ядра из исходников
│   ├── 01-create-image.sh        # создание образа и разметка
│   ├── 02-debootstrap.sh         # установка базовой системы
│   ├── 03-install-kernel.sh      # установка ядра и DTB
│   ├── 04-boot-config.sh         # boot.cmd, uEnv.txt, boot.scr
│   ├── 05-configure.sh           # пользователи, locale, репы, пакеты
│   ├── 06-cleanup.sh             # размонтирование
│   └── 07-install-uboot.sh       # прошивка U-Boot, упаковка xz
├── cache/apt/                    # кеш скачанных пакетов
└── artifacts-trixie/             # готовые образы
```

## Настройка на плате

### Overlays

Редактировать `/boot/uEnv.txt`, строка `overlays=`. Доступные overlays:

```bash
ls /boot/dtbs/overlay/rk3308/
```

После изменения перезагрузить плату.

### Обновление ядра

При установке нового ядра через `dpkg -i linux-image-*.deb` автоматически обновляются DTB, симлинки и boot.scr (через postinst hook `/etc/kernel/postinst.d/zz-napi-update-boot`)


## Контакты

Вопросы, заказ плат и интеграция: dj.novikov@gmail.com
