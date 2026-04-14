---
slug: rtl8188-armbian
title: Установка USB WIFI RTL8188 в Armbian
authors: dmn
tags: [armbian napi wifi]
description: "Установка и настройка USB WiFi адаптера Realtek RTL8188FTV (ID 0bda:f179) в Armbian на NAPI-C."
keywords: [rtl8188, wifi, usb, armbian, napi-c, realtek, драйвер, беспроводная сеть]
---

# Установка USB WiFi адаптера RTL8188FTV на Armbian

**Адаптер:** Realtek RTL8188FTV (ID 0bda:f179) \
**Драйвер:** rtl8xxxu (mainline) \
**Прошивка:** rtlwifi/rtl8188fufw.bin

## 1. Установить необходимые пакеты

```bash
apt update
apt install linux-firmware
apt install zstd
```

## 2. Распаковать прошивку

Пакет `linux-firmware` содержит прошивку в сжатом виде (`.zst`), но ядро Armbian по умолчанию не поддерживает автоматическую распаковку (`CONFIG_FW_LOADER_COMPRESS_ZSTD` не включён). Распаковываем вручную:

```bash
zstd -d /lib/firmware/rtlwifi/rtl8188fufw.bin.zst
```

## 3. Загрузить драйвер

```bash
modprobe rtl8xxxu
```

Если драйвер уже был загружен ранее (с ошибкой), перезагрузить:

```bash
rmmod rtl8xxxu && modprobe rtl8xxxu
```

## 4. Добавить драйвер в автозагрузку

```bash
echo "rtl8xxxu" >> /etc/modules
```

После этого драйвер будет загружаться автоматически при каждой загрузке системы.

## 5. Проверить

```bash
root@napic:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: end0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether ea:b2:0d:09:2e:6c brd ff:ff:ff:ff:ff:ff
    inet 192.168.30.64/24 metric 100 brd 192.168.30.255 scope global dynamic end0
       valid_lft 46523sec preferred_lft 46523sec
    inet6 fe80::e8b2:dff:fe09:2e6c/64 scope link
       valid_lft forever preferred_lft forever
3: wlx6c60ebe162ef: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 6c:60:eb:e1:62:ef brd ff:ff:ff:ff:ff:ff

```
