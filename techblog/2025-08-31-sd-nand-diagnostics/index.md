---
slug: sd-nand-diagnostics
title: Диагностика SD-NAND карт в Linux - получение регистров
authors: dmn
tags: [sd-nand, linux, diagnostics, kernel, zetta]
telegram_id: 16
---

При работе с SD-NAND картами в ядрах Linux 6.x иногда возникают проблемы с инициализацией некоторых карт, например Zetta. Для диагностики полезно уметь получать данные регистров карт.

## Получение данных регистров SD-NAND карт

### Основные регистры для диагностики:

```bash
# Card Identification Register
cat /sys/bus/mmc/devices/mmc0\:1388/cid

# Card Specific Data Register  
cat /sys/bus/mmc/devices/mmc0\:1388/csd

# Operation Conditions Register
cat /sys/bus/mmc/devices/mmc0\:1388/ocr

# Relative Card Address
cat /sys/bus/mmc/devices/mmc0\:1388/rca

# SD Card Configuration Register
cat /sys/bus/mmc/devices/mmc0\:1388/scr
```

### Пример вывода для разных карт:

**Карта 1:**
```bash
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
```

**Карта 2:**
```bash
root@napi-nightstarfish:~# cat /sys/bus/mmc/devices/mmc0\:1388/cid
e700115a6574746101b135ee4a719523
```

## Расшифровка регистров

### CID (Card Identification):
- Содержит уникальную информацию о производителе
- Серийный номер карты
- Дату производства

### CSD (Card Specific Data):
- Параметры доступа к данным
- Размер карты
- Скоростные характеристики

### OCR (Operation Conditions):
- Поддерживаемые уровни напряжения
- Готовность карты к работе

## Поиск проблем

### Определение адреса устройства:
```bash
# Найти все MMC устройства
ls /sys/bus/mmc/devices/

# Проверить все доступные регистры
ls -la /sys/bus/mmc/devices/mmc0:*/
```

### Проверка совместимости:
```bash
# Информация о хост-контроллере
cat /proc/driver/mmc0

# Логи инициализации карты
dmesg | grep mmc
```

## Практическое применение

Эта информация особенно важна при:
- Диагностике проблем совместимости с новыми ядрами
- Выборе подходящих SD-NAND карт для проекта
- Отладке проблем инициализации в embedded системах

Сравнение регистров разных карт помогает выявить различия в их характеристиках и понять причины проблем совместимости с конкретными версиями ядра Linux.