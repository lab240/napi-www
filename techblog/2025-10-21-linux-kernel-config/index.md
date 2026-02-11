---
slug: linux-kernel-config
title: Просмотр опций компиляции ядра Linux
authors: dmn
tags: [linux, kernel, config, uart, serial]
telegram_id: 22
---

Как посмотреть с какими опциями было скомпилировано текущее ядро Linux.

## Основная команда

```bash
zcat /proc/config.gz
```

Эта команда выводит полную конфигурацию ядра, с которой оно было скомпилировано.

## Фильтрация по интересующим опциям

### Все настройки последовательных портов:
```bash
zcat /proc/config.gz | grep -E 'CONFIG_SERIAL_8250_NR_UARTS|CONFIG_SERIAL_8250|CONFIG_SERIAL_'
```

### Настройки GPIO:
```bash
zcat /proc/config.gz | grep CONFIG_GPIO
```

### Настройки SPI:
```bash
zcat /proc/config.gz | grep CONFIG_SPI
```

### Настройки I2C:
```bash
zcat /proc/config.gz | grep CONFIG_I2C
```

### Настройки USB:
```bash
zcat /proc/config.gz | grep CONFIG_USB
```

## Поиск конкретных опций

### Поиск по названию модуля:
```bash
zcat /proc/config.gz | grep -i modbus
zcat /proc/config.gz | grep -i zigbee  
zcat /proc/config.gz | grep -i bluetooth
```

### Поиск драйверов:
```bash
zcat /proc/config.gz | grep CONFIG_DRIVER
```

## Полезные примеры

### Проверка поддержки UART:
```bash
zcat /proc/config.gz | grep CONFIG_SERIAL_8250_NR_UARTS
# Покажет максимальное количество поддерживаемых UART портов
```

### Проверка поддержки CAN:
```bash
zcat /proc/config.gz | grep CONFIG_CAN
```

### Проверка поддержки Modbus:
```bash
zcat /proc/config.gz | grep CONFIG_MODBUS
```

## Альтернативные способы

### Через /boot:
```bash
# Если конфиг сохранен в /boot
cat /boot/config-$(uname -r)
```

### Через модули:
```bash
# Список загруженных модулей
lsmod

# Информация о конкретном модуле
modinfo <module_name>
```

## Анализ результатов

Значения опций:
- **=y** - встроено в ядро
- **=m** - скомпилировано как модуль
- **# CONFIG_XXX is not set** - опция отключена

### Пример вывода:
```
CONFIG_SERIAL_8250=y
CONFIG_SERIAL_8250_CONSOLE=y
CONFIG_SERIAL_8250_NR_UARTS=4
CONFIG_SERIAL_8250_RUNTIME_UARTS=4
CONFIG_SERIAL_8250_DW=y
```

## Практическое применение

### Отладка проблем:
- Проверить включена ли поддержка нужного интерфейса
- Убедиться что драйвер скомпилирован
- Найти ограничения (например, количество UART)

### Планирование:
- Определить возможности текущего ядра
- Понять нужна ли пересборка для новых функций

Эта информация особенно полезна при работе с embedded системами и отладке проблем совместимости оборудования.