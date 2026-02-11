---
slug: blue-led-gpio2b4
title: Перенос blue-led на GPIO2B4 в Armbian
authors: dmn
tags: [gpio, led, overlay, armbian, dts, spi]
telegram_id: 20
---

Исправление предыдущего примера переноса индикатора: GPIO3B3 конфликтует с SPI1-CLK, поэтому переносим blue-led на GPIO2B4.

## Проблема с предыдущим решением

В предыдущем примере **GPIO3B3** попал на **SPI1-CLK**, что может вызвать конфликты с SPI интерфейсом. Используем более безопасный **GPIO2B4**.

## Создание правильного overlay

### Файл blue-led-gpio2b4-1.dts:

```dts
/dts-v1/;
/plugin/;

/ {
    fragment@0 {
        /* Целевой узел именно под /leds */
        target-path = "/leds/blue-led";
        __overlay__ {
            gpios = <&gpio2 12 0>;          /* GPIO2_B4, ACTIVE_HIGH */
            linux,default-trigger = "heartbeat";
            default-state = "on";
            status = "okay";
        };
    };
};
```

## Расчет номера GPIO

Для **GPIO2B4**:
- Банк: **2** 
- Группа: **B** (8-15)
- Пин: **4**
- **Итого: 8 + 4 = 12**

## Установка overlay

### Автоматический способ:
```bash
armbian-add-overlay blue-led-gpio2b4-1.dts
```

### Ручной способ:
```bash
# Компиляция
dtc -@ -I dts -O dtb -o blue-led-gpio2b4-1.dtbo blue-led-gpio2b4-1.dts

# Копирование в системную папку
sudo cp blue-led-gpio2b4-1.dtbo /boot/dtb/overlay/

# Добавление в конфигурацию
echo "user_overlays=blue-led-gpio2b4-1" >> /boot/armbianEnv.txt
```

## Применение изменений

```bash
reboot
```

## Проверка результата

### Визуальная проверка:
- Диод должен начать мигать в режиме heartbeat на пине GPIO2B4

### Программная проверка:

```bash
# Проверка активных LED
ls -la /sys/class/leds/

# Проверка триггера
cat /sys/class/leds/blue-led/trigger

# Проверка GPIO
gpioinfo -c gpiochip2 | grep -A5 -B5 "line  12"
```

## Преимущества GPIO2B4

✅ **Безопасность:**
- Не конфликтует с SPI интерфейсами
- Не используется системными функциями
- Доступен на разъеме

✅ **Совместимость:**
- Работает со всеми версиями Armbian
- Не требует дополнительных драйверов

## Отладка проблем

### Проверка загрузки overlay:
```bash
dmesg | grep overlay | grep blue-led
```

### Проверка конфликтов GPIO:
```bash
cat /sys/kernel/debug/gpio
```

### Возврат к умолчанию:
```bash
# Удаление из конфигурации
sed -i '/blue-led-gpio2b4-1/d' /boot/armbianEnv.txt
reboot
```

## Альтернативные пины

Если GPIO2B4 занят, можно использовать:
- **GPIO2B3** (11) - `<&gpio2 11 0>`
- **GPIO2B5** (13) - `<&gpio2 13 0>`  
- **GPIO2C0** (16) - `<&gpio2 16 0>`

Выберите свободный пин в соответствии с вашей схемой подключения.

Данное решение обеспечивает корректную работу heartbeat индикатора без конфликтов с системными интерфейсами.