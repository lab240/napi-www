---
slug: sd-nand-diagnostics
title: Диагностика SD-NAND карт в Linux - получение регистров
authors: dmn
tags: [sd-nand, linux, diagnostics, kernel, zetta]
telegram_id: 16
---

Пришлось глубоко копнуть в часть SD-NAND, так как некоторые карты Zetta не инициализировались в ядрах 6.х Linux.

## Полезные факты и приемы

### Получаем данные регистров SD (SD-NAND) карт

Карта  1.

```
root@napi-rk3308b-s:~# cat /sys/bus/mmc/devices/mmc0\:1388/cid
ba2345534134474206071c06fe016945
root@napi-rk3308b-s:~# cat /sys/bus/mmc/devices/mmc0\:1388/csd
400e00325b5900001cdf7f800a4000d7
root@napi-rk3308b-s:~# cat /sys/bus/mmc/devices/mmc0\:1388/ocr
0x00300000
root@napi-rk3308b-s:~# cat /sys/bus/mmc/devices/mmc0\:1388/rca
0x1388
root@napi-rk3308b-s:~# cat /sys/bus/mmc/devices/mmc0\:1388/scr
0235000e00000000
root@napi-rk3308b-s:~#

```

Карта 2

```
root@napi-nightstarfish:~# cat /sys/bus/mmc/devices/mmc0\:1388/cid
e700115a6574746101b135ee4a719523
root@napi-nightstarfish:~#  cat /sys/bus/mmc/devices/mmc0\:1388/csd
400e00325b5900001d177f800a40008d
root@napi-nightstarfish:~# cat /sys/bus/mmc/devices/mmc0\:1388/ocr
0x00300000
root@napi-nightstarfish:~# cat /sys/bus/mmc/devices/mmc0\:1388/rca
0x1388
root@napi-nightstarfish:~# cat /sys/bus/mmc/devices/mmc0\:1388/scr
0205848f33333039
root@napi-nightstarfish:~#
```

В uboot

```
=> mmc info
Device: mmc@ff500000
Manufacturer ID: 3
OEM: 5344
Name: SA04G
Bus Speed: 50000000
Mode : SD High Speed (50MHz)
```

### Расшифровка SCR (чатгпт)

```
1) SCR contents (from Linux):

SCR = 02 05 84 8F 33 33 30 39

Decoded:

SCR Structure = 0 (v1.0)

SD Spec = 2.0 + Spec3 → SD 3.0 (UHS-I)

Bus widths = 1-bit and 4-bit supported

Security = CPRM supported

Byte 3 = 0x8F → according to the SD spec, bits indicate:

bit0 = CMD20 supported

bit1 = CMD23 supported

bit2 = CMD48 supported

bit3 = CMD49 supported

```

### Расшифровка CID (чатгпт)

```
CID #1

ba2345534134474206071c06fe016945

MID: 0xBA

OID: 0x23 0x45  → «#E» (непечатный/нестандартный OID, трактую как hex)

PNM: SA4GB

PRV: 0.6

PSN: 119277310 (0x071C06FE)

MDT: 2022-09  (разбор по формуле: ((cid[13]&0x0F)<<8)|cid[14]) → год=2000+((mdt>>4)&0xFF), месяц=mdt&0xF)
```

```
CID #2

e700115a6574746101b135ee4a719523

MID: 0xE7  (похоже на Zetta)

OID: 0x00 0x11  → непечатный (оставляем в hex)

PNM: Zetta

PRV: 0.1

PSN: 2973101642 (0xB135EE4A)

MDT: 2025-05

```

### Что по факту отличается

**Производитель/бренд:**

— #1: MID=0xBA, имя продукта SA4GB (выглядит как «4GB» линейка).
— #2: MID=0xE7, имя продукта Zetta (бренд Zetta виден прямо в PNM).

**Версия продукта (PRV):**

— #1: 0.6 (более поздняя ревизия конкретной линейки),
— #2: 0.1 (самая ранняя ревизия).

**Серийный номер (PSN):** разные (ожидаемо), у #2 — существенно большее значение.

**Дата производства (MDT):**
— #1: 2022-09,
— #2: 2025-05 (свежее).

**OID:** у обеих — непечатные/нестандартные коды (это нормально: поле OEM/Application ID не обязано быть ASCII).

### Место в ядре где идёт чтение регистров карты

https://github.com/torvalds/linux/blob/07d9df80082b8d1f37e05658371b087cb6738770/drivers/mmc/core/sd.c#L1279

#sdnand #kernel #linuxkernel #sys #uboot
