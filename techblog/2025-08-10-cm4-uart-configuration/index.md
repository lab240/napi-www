---
slug: cm4-uart-configuration
title: Конфигурация UART на модуле CM4 в Токосборщике
authors: dmn
tags: [uart, cm4, orangepi, overlay, modbus, zigbee]
telegram_id: 12
---

В Токосборщике на модуле CM4 UART порты имеют специальное назначение и требуют правильной настройки оверлеев.

## Назначение UART портов

✔️ **UART3** - внешний датчик Modbus  
✔️ **UART9** - модуль расширений (Zigbee)  
✔️ **UART7** - встроенный датчик тока

## Конфигурация оверлеев

Для корректной работы в Debian необходимо подключить оверлеи с uart7,9 в файле `/boot/orangepiEnv.txt`:

```bash
verbosity=1
bootlogo=false
extraargs=cma=128M
overlay_prefix=rk356x
overlays=uart7-m2 uart9-m2
rootdev=UUID=a0f8ca89-7eb7-4a1e-947a-2341637b4782
rootfstype=ext4
console=serial
```

## Проверка конфигурации

Просмотр текущей конфигурации:

```bash
cat /boot/orangepiEnv.txt
```

## Проверка активации

После перезагрузки проверьте наличие устройств:

```bash
ls -la /dev/ttyS*
```

Должны появиться соответствующие устройства:
- `/dev/ttyS3` - для внешнего Modbus датчика  
- `/dev/ttyS7` - для встроенного датчика тока
- `/dev/ttyS9` - для модуля расширений Zigbee

Эта конфигурация обеспечивает корректную работу всех интерфейсов в системе Токосборщика на базе CM4.