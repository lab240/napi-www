---
sidebar_position: 3
title: Промышленный компьютер FCCM3308 (Napi-Slot, 2xEth)
description: FCCM3308 - суперкомпактный промышленный компьютер на модуле Napi Slot (RK3308, 512Мб ОЗУ, 32Гб eMMC). RS485, 2xEthernet, RTC, DIN-рейка. Работает под NapiLinux, Armbian, Debian.
keywords: [FCCM3308, промышленный компьютер Linux, Napi Slot, RK3308, DIN-рейка, RS485, NapiLinux, Armbian, встраиваемый компьютер, сборщик данных]
image: img/fccm3308smallslot.jpg
---

# Сборщик-компакт FCCM3308 (FCCMAX)

>Сборщик-компакт M (FCCM3308) — суперкомпактный промышленный компьютер на основе модуля Napi Slot под управлением ОС Linux (Armbian, NapiLinux c интерфейсом NapiConfig).

![Сборщик-компакт FCCM3308](img/fccm3308smallslot.jpg)

![Общий вид FCCM3308](img3/fccm3308-1.png)

## Отличия от FCC3308

- FCC3308: NAPI-C, 1xEth, нет консоли, 8Гб Nand
- FCC3308M: Napi Slot, 2xEth, Консоль USB Type-C, **32Гб EMMC**

## Технические характеристики FCCM3308

![Технические характеристики FCCM3308](img3/fccm3308-800.png)

![Плата FCCM3308, вид спереди](img3/fcc3308-board-front.jpeg)

- Процессорный модуль Napi Slot (4-ядерный RK3308, 512Мб ОЗУ, 32Гб ПЗУ)
- RS485 c изоляцией
- Питание 12-24
- Passive POE
- RTC (часы реального времени)
- 2 х Ethernet 100 Мбит/с
- Встроенная Console
- USB type A
- Питание USB OTG
- USB TYpe-C (*)
- MiroSD слот для карт до 512Гб
- Пассивное охлаждение
- Крепление на DIN-рейку
- Программное обеспечение: NapiLinux\Armbian\Debian\OpenWRT

(*) Вместо второго Ethernet, определяется переключателем.

> NapiLinux - российский Linux для Embedded c Веб-интерфейсом NapiConfig2
> Armbian - Debian-совместимый Linux



## Удобная конструкция

- Все интерфейсы на лицевой стороне
- Открутив один можно откинуть крышку и получить доступ к консоли и к SD-слоту

## Крепление на DIN

![Крепление FCCM3308 на DIN-рейку](../FCC3308/img/FCC3308-din.jpg)

## Размеры

Размеры такие же как у FCC3308

![Размеры FCCM3308](../FCC3308/img/FCC3308-dimentions.jpg)

## Программное обеспечение

>FCCM3308 работает на основе вычислительного модуля NAPI Slot под управлением ОС Linux

### NapiLinux

NapiLinux - российская сборка Linux с интерфейсом NapiConfig2. В системе предустановлено программное обеспечение для сбора данных с датчиков (Telegraf, InfluxDB2) и Веб-интерфейс для настройки датчиков и получения данных с датчиков.

![Веб-интерфейс NapiLinux NapiConfig2](../FCC3308/img/napilinux.jpg)

Подробнее: http://www.napilinux.ru, [скачать образ](/downloads).

### Armbian, Debian, OpenWRT

На модуле работают [все прошивки](/downloads) для NAPI-C.

## Конфигурация Linux

Для корректной работы необходимо проверить файлы

- Armbian
```
/boot/armbianEnv.txt
```

- NapiLinux\Debian

```
/boot/uEnv.txt
```

Проверьте наличие UART3 в разделе overlays

```
overlays=uart3-m0 i2c1-ds1338 i2c3-m0 usb20-host
```
