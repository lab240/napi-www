---
slug: can-interface-setup
title: Настройка и тестирование CAN интерфейса в Linux
authors: dmn
tags: [can, socketcan, can-utils, network, automotive]
telegram_id: 39
---

CAN в Linux реализован как сетевой интерфейс. Разберем настройку и тестирование CAN интерфейса.

## Особенности CAN в Linux

🔥 **Интересная особенность**: CAN в Linux - это сетевой интерфейс, но:
- На него нельзя назначить IP адрес
- Управляется через команды `ip link`
- Использует специальные CAN сокеты

## Настройка CAN интерфейса

### Базовая конфигурация:
```bash
# Остановить интерфейс
ip link set can0 down

# Настроить параметры CAN
ip link set can0 type can bitrate 500000 restart-ms 100

# Запустить интерфейс
ip link set can0 up
```

### Параметры конфигурации:
- **bitrate 500000** - скорость 500 кбит/с
- **restart-ms 100** - автоматический перезапуск через 100 мс при ошибках

## Установка утилит

```bash
apt install can-utils
```

**Основные утилиты:**
- **cansend** - отправка CAN сообщений
- **candump** - прослушивание CAN трафика  
- **cansequence** - генерация последовательности сообщений
- **cangen** - генератор нагрузки

## Тестирование loopback

### Прослушивание в одной сессии:
```bash
candump -L can0
```
Флаг `-L` включает отображение локальных (loopback) сообщений.

### Отправка в другой сессии:
```bash
cansend can0 123#11223344
```

**Формат сообщения:**
- **123** - CAN ID (hex)
- **#** - разделитель  
- **11223344** - данные (hex, до 8 байт)

### Ожидаемый результат:
```
(1769774861.028890) can0 123#11223344
```

## Расширенные примеры

### Отправка различных сообщений:
```bash
# Стандартный ID с данными
cansend can0 456#AABBCCDD

# Расширенный ID (29 бит)
cansend can0 80000001#1122334455667788

# RTR (Remote Transmission Request)
cansend can0 123#R

# Без данных
cansend can0 789#
```

### Фильтрация сообщений:
```bash
# Только определенный ID
candump can0,123:7FF

# Диапазон ID
candump can0,100:700

# Исключить ID
candump can0,0:0 -v
```

## Мониторинг и диагностика

### Статистика интерфейса:
```bash
# Общая информация
ip -details link show can0

# CAN-специфичные счетчики
cat /proc/net/can/stats
```

### Ошибки и состояние:
```bash
# Счетчики ошибок
candump can0 -e

# Статистика по узлам
cat /proc/net/can/rcvlist_all
```

## Автоматизация настройки

### Скрипт инициализации:
```bash
#!/bin/bash
# can_setup.sh

CAN_INTERFACE="can0"
CAN_BITRATE="500000"

setup_can() {
    echo "Setting up CAN interface $CAN_INTERFACE..."
    
    # Stop interface
    ip link set $CAN_INTERFACE down 2>/dev/null
    
    # Configure CAN parameters
    ip link set $CAN_INTERFACE type can bitrate $CAN_BITRATE restart-ms 100
    
    # Start interface
    ip link set $CAN_INTERFACE up
    
    if [ $? -eq 0 ]; then
        echo "CAN interface $CAN_INTERFACE configured successfully"
        ip link show $CAN_INTERFACE
    else
        echo "Failed to configure CAN interface"
        exit 1
    fi
}

test_can() {
    echo "Testing CAN interface..."
    
    # Start candump in background
    candump -L $CAN_INTERFACE &
    CANDUMP_PID=$!
    
    sleep 1
    
    # Send test message
    cansend $CAN_INTERFACE 123#DEADBEEF
    
    sleep 1
    
    # Stop candump
    kill $CANDUMP_PID 2>/dev/null
    
    echo "Test completed"
}

case "$1" in
    setup)
        setup_can
        ;;
    test)
        test_can
        ;;
    both)
        setup_can
        test_can
        ;;
    *)
        echo "Usage: $0 {setup|test|both}"
        ;;
esac
```

## Systemd сервис

### Автозапуск CAN интерфейса:
```ini
[Unit]
Description=CAN Interface Setup
After=network.target

[Service]
Type=oneshot
ExecStart=/bin/bash -c 'ip link set can0 down; ip link set can0 type can bitrate 500000 restart-ms 100; ip link set can0 up'
ExecStop=/bin/bash -c 'ip link set can0 down'
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

## Отладка проблем

### Проверка драйвера:
```bash
# Доступные CAN интерфейсы
ls /sys/class/net/ | grep can

# Состояние драйвера
dmesg | grep can
```

### Типичные проблемы:
```bash
# Интерфейс не найден
modprobe can
modprobe can-dev
modprobe vcan  # для виртуального CAN

# Права доступа
sudo usermod -a -G dialout $USER
```

Настройка CAN интерфейса в Linux обеспечивает полноценную работу с CAN шинами в промышленных и автомобильных применениях через стандартные сетевые инструменты.