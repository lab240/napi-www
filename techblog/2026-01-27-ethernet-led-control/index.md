---
slug: ethernet-led-control
title: Управление светодиодами Ethernet через MDIO
authors: dmn
tags: [ethernet, mdio, led, phytool, network]
telegram_id: 38
---

Утилита для управления MDIO регистрами, в частности подсветкой индикаторов Ethernet портов.

## Установка phytool

```bash
git clone https://github.com/wkz/phytool.git
cd phytool
make
```

## Классическая конфигурация LED

**Левый (зелёный) - Link, правый (рыжий) - Activity:**

```bash
# Выбрать страницу LED конфигурации
./phytool write wan/0/0x1f 0x0d04

# (Опционально) отключить EEE LED влияние
./phytool write wan/0/0x11 0x0000

# Установить: LED1=Link(any speed), LED2=Activity
./phytool write wan/0/0x10 0xC160

# Вернуть страницу 0
./phytool write wan/0/0x1f 0x0000
```

## Альтернативная конфигурация

**Левый (зелёный) - Link+Activity 10Mbit, правый (рыжий) - Link+Activity 100+Mbit:**

```bash
# Выбрать страницу LED конфигурации  
./phytool write wan/0/0x1f 0x0d04

# (Опционально) отключить EEE LED влияние
./phytool write wan/0/0x11 0x0000

# Установить комбинированную конфигурацию
./phytool write wan/0/0x10 0x6251

# Вернуть страницу 0
./phytool write wan/0/0x1f 0x0000
```

## Разбор команд

### Переключение страниц MDIO:
```bash
./phytool write wan/0/0x1f 0x0d04  # Страница LED конфигурации
./phytool write wan/0/0x1f 0x0000  # Страница 0 (основная)
```

### Конфигурация LED:
- **0x10** - регистр конфигурации LED
- **0x11** - регистр EEE LED влияния
- **0xC160** - Link на LED1, Activity на LED2
- **0x6251** - Link+Activity с разделением по скорости

## Основные функции LED

### Типы индикации:
- **Link** - постоянное свечение при наличии соединения
- **Activity** - мигание при передаче данных
- **Speed** - различие по скорости соединения (10/100/1000 Mbit)
- **Duplex** - полный/полудуплекс режим

### Цветовая схема:
- **Зелёный** - обычно Link или низкие скорости
- **Рыжий/Жёлтый** - Activity или высокие скорости

## Чтение текущих настроек

### Чтение регистров LED:
```bash
# Переключиться на страницу LED
./phytool write wan/0/0x1f 0x0d04

# Прочитать текущую конфигурацию
./phytool read wan/0/0x10
./phytool read wan/0/0x11

# Вернуться на страницу 0
./phytool write wan/0/0x1f 0x0000
```

### Чтение основной информации:
```bash
# ID чипа PHY
./phytool read wan/0/0x02
./phytool read wan/0/0x03

# Статус соединения
./phytool read wan/0/0x01
```

## Автоматизация настройки

### Скрипт настройки LED:
```bash
#!/bin/bash
# ethernet_led_setup.sh

PHYTOOL="./phytool"
INTERFACE="wan/0"

setup_classic_leds() {
    echo "Setting up classic LED configuration..."
    
    # LED configuration page
    $PHYTOOL write $INTERFACE/0x1f 0x0d04
    
    # Disable EEE LED influence
    $PHYTOOL write $INTERFACE/0x11 0x0000
    
    # LED1=Link, LED2=Activity
    $PHYTOOL write $INTERFACE/0x10 0xC160
    
    # Return to page 0
    $PHYTOOL write $INTERFACE/0x1f 0x0000
    
    echo "Classic LED configuration applied"
}

setup_speed_leds() {
    echo "Setting up speed-based LED configuration..."
    
    # LED configuration page
    $PHYTOOL write $INTERFACE/0x1f 0x0d04
    
    # Disable EEE LED influence
    $PHYTOOL write $INTERFACE/0x11 0x0000
    
    # Speed-based configuration
    $PHYTOOL write $INTERFACE/0x10 0x6251
    
    # Return to page 0
    $PHYTOOL write $INTERFACE/0x1f 0x0000
    
    echo "Speed-based LED configuration applied"
}

# Использование
case "$1" in
    classic)
        setup_classic_leds
        ;;
    speed)
        setup_speed_leds
        ;;
    *)
        echo "Usage: $0 {classic|speed}"
        echo "  classic - Link + Activity LEDs"
        echo "  speed   - Speed-based Link+Activity LEDs"
        ;;
esac
```

## Отладка и диагностика

### Проверка доступности PHY:
```bash
# Сканирование MDIO шины
./phytool list
```

### Диагностика соединения:
```bash
# Статус Link
./phytool read wan/0/0x01

# Автоматическое согласование
./phytool read wan/0/0x05
```

### Принудительная настройка скорости:
```bash
# 100Mbit, Full Duplex
./phytool write wan/0/0x00 0x2100

# Автоматическое согласование
./phytool write wan/0/0x00 0x1000
```

Настройка LED индикаторов позволяет адаптировать визуальную индикацию Ethernet портов под конкретные требования проекта и обеспечить удобную диагностику состояния сетевых соединений.