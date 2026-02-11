---
slug: serial-port-configuration
title: Настройка параметров последовательного порта в Linux
authors: dmn
tags: [uart, serial, stty, linux, configuration]
telegram_id: 32
---

Установка и проверка параметров последовательного порта в Linux на примере ttyS1.

## Просмотр текущих параметров

```bash
stty -F /dev/ttyS1 -a
```

### Пример вывода:
```
speed 115200 baud; line = 0;
-brkint -icrnl -imaxbel
opost -onlcr
cs8 -parenb -cstopb
```

## Расшифровка параметров

### Скорость и базовые настройки:
- **speed 115200 baud** - текущая скорость передачи
- **cs8** - 8 бит данных
- **-parenb** - без бита четности (N)
- **-cstopb** - 1 стоп-бит (если **cstopb** → 2 стоп-бита)

### Управляющие сигналы:
- **-crtscts** - отключить аппаратный контроль потока RTS/CTS
- **-ixon -ixoff** - отключить программный контроль потока XON/XOFF

## Установка параметров порта

### Типичная конфигурация:
```bash
stty -F /dev/ttyS1 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts
```

### Разбор команды:
- **115200** - скорость 115200 бод
- **cs8** - 8 бит данных  
- **-cstopb** - 1 стоп-бит
- **-parenb** - без четности
- **-ixon -ixoff** - без программного контроля потока
- **-crtscts** - без аппаратного контроля потока

## Популярные конфигурации

### Modbus RTU (9600 8N1):
```bash
stty -F /dev/ttyS1 9600 cs8 -cstopb -parenb -ixon -ixoff -crtscts
```

### Промышленные датчики (19200 8E1):
```bash
stty -F /dev/ttyS1 19200 cs8 -cstopb parenb parodd -ixon -ixoff -crtscts
```

### GPS модули (4800 8N1):
```bash
stty -F /dev/ttyS1 4800 cs8 -cstopb -parenb -ixon -ixoff -crtscts
```

## Тестирование порта

### Отправка данных:
```bash
echo "test message" > /dev/ttyS1
```

### Чтение данных:
```bash
cat /dev/ttyS1
```

### Интерактивная работа:
```bash
# В одном терминале - чтение
cat /dev/ttyS1

# В другом терминале - отправка  
echo "hello" > /dev/ttyS1
```

## Специальные режимы

### Raw режим (без обработки):
```bash
stty -F /dev/ttyS1 raw
```

### Восстановление в cooked режим:
```bash
stty -F /dev/ttyS1 cooked
```

### Минимальные настройки:
```bash
stty -F /dev/ttyS1 115200 raw -echo
```

## Сохранение настроек

### Сохранение текущих настроек:
```bash
stty -F /dev/ttyS1 > /tmp/ttyS1_settings.txt
```

### Восстановление настроек:
```bash
stty -F /dev/ttyS1 $(cat /tmp/ttyS1_settings.txt)
```

## Отладка проблем

### Проверка доступности устройства:
```bash
ls -la /dev/ttyS1
```

### Проверка прав доступа:
```bash
# Добавление пользователя в группу dialout
sudo usermod -a -G dialout $USER
```

### Мониторинг активности:
```bash
# Просмотр статистики порта
cat /proc/tty/driver/serial
```

## Автоматизация настроек

### Скрипт инициализации:
```bash
#!/bin/bash
# setup_serial.sh
DEVICE="/dev/ttyS1"
BAUDRATE="115200"

stty -F $DEVICE $BAUDRATE cs8 -cstopb -parenb -ixon -ixoff -crtscts
echo "Port $DEVICE configured: $BAUDRATE 8N1"
```

### Systemd сервис:
```ini
[Unit]
Description=Serial Port Setup
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/setup_serial.sh
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

Правильная настройка параметров последовательного порта критически важна для стабильной работы с промышленным оборудованием и датчиками.