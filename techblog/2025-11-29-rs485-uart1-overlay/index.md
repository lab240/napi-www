---
slug: rs485-uart1-overlay
title: Overlay для RS485 на UART1 с GPIO управлением направления
authors: dmn
tags: [rs485, uart, overlay, gpio, napi-c]
telegram_id: 29
---

Создание overlay для настройки RS485 на UART1 (NAPI-C) с контролем направления передачи через GPIO2_B4.

## Overlay файл uart1-de.dts

```dts
/dts-v1/;
/plugin/;

/ {
  compatible = "rockchip,rk3308";

  fragment@0 {
    target = <&uart1>;
    __overlay__ {
      status = "okay";

      pinctrl-names = "default";
      pinctrl-0 = <&uart1_xfer>;

      linux,rs485-enabled-at-boot-time;
      rs485-rts-active-high;
      rs485-rts-delay = <0 0>;
      rts-gpios = <&gpio2 12 0>;
    };
  };
};
```

## Разбор параметров

### Основные настройки:
- **`status = "okay`"** - включает UART1
- **`pinctrl-0 = <&uart1_xfer>`** - настройки пинов для TX/RX

### RS485 специфичные параметры:
- **linux,rs485-enabled-at-boot-time** - включает RS485 при загрузке
- **rs485-rts-active-high** - RTS активен высоким уровнем
- **`rs485-rts-delay = <0 0>`** - задержки переключения [before, after] в микросекундах
- **`rts-gpios = <&gpio2 12 0>`** - GPIO для управления направлением (DE pin)

## Расчет GPIO

Для **GPIO2_B4**:
- Банк: **2**
- Группа: **B** (8-15)
- Пин: **4**
- **Итого: 8 + 4 = 12**

## Установка overlay

### Компиляция и установка:
```bash
# Компиляция
dtc -@ -I dts -O dtb -o uart1-de.dtbo uart1-de.dts

# Копирование в системную папку
sudo cp uart1-de.dtbo /boot/dtb/overlay/

# Добавление в armbianEnv.txt
echo "user_overlays=uart1-de" >> /boot/armbianEnv.txt

# Перезагрузка
reboot
```

### Автоматический способ (Armbian):
```bash
armbian-add-overlay uart1-de.dts
```

## Проверка работы

### Проверка устройства:
```bash
ls -la /dev/ttyS1
```

### Проверка RS485 параметров:
```bash
# Через device tree
ls -la /proc/device-tree/serial@ff0b0000/
cat /proc/device-tree/serial@ff0b0000/status

# Должны присутствовать файлы:
# linux,rs485-enabled-at-boot-time
# rs485-rts-active-high
# rs485-rts-delay
# rts-gpios
```

### Проверка GPIO:
```bash
gpioinfo -c gpiochip2 | grep "line  12"
```

## Настройка порта

### Установка параметров:
```bash
stty -F /dev/ttyS1 9600 cs8 -cstopb -parenb -ixon -ixoff -crtscts
```

### Проверка настроек:
```bash
stty -F /dev/ttyS1 -a
```

## Тестирование RS485

### Отправка данных:
```bash
echo "test message" > /dev/ttyS1
```

### Мониторинг GPIO:
```bash
# Наблюдение за переключением DE pin
watch -n 0.1 "gpioget -c gpiochip2 12"
```

### Логирование трафика:
```bash
# Отправка с мониторингом
stdbuf -oL cat /dev/ttyS1 | tee rs485.log &
echo "test" > /dev/ttyS1
```

## Альтернативные GPIO

Если GPIO2_B4 занят, можно использовать:

```dts
rts-gpios = <&gpio2 11 0>;  // GPIO2_B3
rts-gpios = <&gpio2 13 0>;  // GPIO2_B5
rts-gpios = <&gpio3 27 0>;  // GPIO3_B3
```

## Отладка проблем

### Проверка конфликтов пинов:
```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep gpio2
```

### Логи ядра:
```bash
dmesg | grep uart
dmesg | grep rs485
```

Данный overlay обеспечивает корректную работу RS485 интерфейса с автоматическим управлением направлением передачи через выделенный GPIO пин.
