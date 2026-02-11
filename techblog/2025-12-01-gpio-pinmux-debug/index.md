---
slug: gpio-pinmux-debug
title: Диагностика занятости GPIO пинов в Linux
authors: dmn
tags: [gpio, pinmux, debug, rockchip, pinctrl]
telegram_id: 30
---

В Linux можно посмотреть чем заняты все GPIO пины для диагностики конфликтов и планирования использования.

## Основная команда

```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
```

## Формат вывода

```
Pinmux settings per pin
Format: pin (name): mux_owner gpio_owner hog?
```

### Пример для NAPI-C:

```
pin 0 (gpio0-0): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 1 (gpio0-1): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 2 (gpio0-2): sdio-pwrseq gpio0:2 function sdio-pwrseq group wifi-enable-h
pin 3 (gpio0-3): ff480000.mmc (GPIO UNCLAIMED) function sdmmc group sdmmc-det
pin 4 (gpio0-4): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 5 (gpio0-5): (MUX UNCLAIMED) (GPIO UNCLAIMED)
```

## Расшифровка статусов

### MUX состояния:
- **(MUX UNCLAIMED)** - пин свободен для использования
- **ff480000.mmc** - пин занят MMC контроллером
- **sdio-pwrseq** - пин используется для управления питанием SDIO

### GPIO состояния:
- **(GPIO UNCLAIMED)** - пин не используется как GPIO
- **gpio0:2** - пин используется как GPIO0 линия 2

## Полезные фильтры

### Поиск свободных пинов:
```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep "UNCLAIMED.*UNCLAIMED"
```

### Поиск занятых GPIO:
```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep -v "UNCLAIMED"
```

### Поиск пинов конкретного банка:
```bash
# GPIO2 банк
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep "gpio2"
```

### Поиск пинов UART:
```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep uart
```

## Дополнительная диагностика

### Общая информация о GPIO:
```bash
cat /sys/kernel/debug/gpio
```

### Информация о конкретном банке:
```bash
gpioinfo -c gpiochip2
```

### Активные pinctrl группы:
```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pingroups
```

## Планирование использования

### Алгоритм выбора свободного пина:

1. **Найти свободные пины:**
```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep "UNCLAIMED.*UNCLAIMED" | head -10
```

2. **Проверить доступность на разъеме:**
- Сверить с схемой платы
- Убедиться что пин выведен на колодку

3. **Проверить отсутствие конфликтов:**
```bash
# Проверить нет ли альтернативных функций
grep -i "gpio2_b4" /tmp/running.dts
```

## Примеры занятых пинов

### UART пины:
```
pin 32 (gpio1-0): ff0a0000.serial (GPIO UNCLAIMED) function uart0 group uart0-xfer
pin 33 (gpio1-1): ff0a0000.serial (GPIO UNCLAIMED) function uart0 group uart0-xfer
```

### I2C пины:
```
pin 56 (gpio2-8): ff130000.i2c (GPIO UNCLAIMED) function i2c1 group i2c1-xfer  
pin 57 (gpio2-9): ff130000.i2c (GPIO UNCLAIMED) function i2c1 group i2c1-xfer
```

### SPI пины:
```
pin 44 (gpio1-12): ff120000.spi (GPIO UNCLAIMED) function spi0 group spi0-txd-rxd-clk-cs0
```

## Конфликты и решения

### Типичные конфликты:
- GPIO используется системой, но нужен как пользовательский
- Пин назначен интерфейсу, который не используется
- Overlay переопределяет системные настройки

### Решения:
```bash
# Освобождение пина через overlay
# Создать DTS с status = "disabled" для ненужного интерфейса

# Альтернативный пин
# Найти другой свободный пин в том же банке
```

Эта информация критически важна при создании overlay и планировании подключения периферии к системе.