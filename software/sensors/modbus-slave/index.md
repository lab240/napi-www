---
sidebar_position: 60
title: "modbus_slave - эмулятор Modbus RTU устройств"
description: "Эмулируйте до 30 Modbus RTU датчиков на одном COM-порту. Подавайте реальные данные из скриптов или случайные значения для тестирования. Linux, Windows, ARM -- один бинарь без зависимостей."
tags: [modbus, rtu, rs485, embedded, linux, napi, tools]
---

# modbus_slave - эмулятор Modbus RTU устройств

Утилита `modbus_slave` эмулирует до 30 независимых Modbus RTU slave-устройств на одном последовательном порту. Для мастера (ПЛК, SCADA) всё выглядит так, как будто на шине RS-485 подключены реальные приборы.

## Для чего это нужно

- Проверить мастер-опросник, когда физических датчиков нет под рукой
- Показать демо заказчику без реального оборудования
- Нагрузочное тестирование шины - запустить 30 устройств одной командой
- Подать в мастер реальные данные (температура CPU, время, показания I2C/1-Wire) через файлы

## Быстрый старт

Скачайте готовый бинарь из [репозитория](https://github.com/lab240/modbus-slave) для своей платформы:

| Файл | Платформа |
|------|-----------|
| `bin/modbus_slave` | Linux x86_64 |
| **`bin/modbus_slave_aarch64`** | **Linux aarch64 (NAPI, Сборщики)** |
| `bin/modbus_slave.exe` | Windows x64 |

Запуск одного устройства с рандомными регистрами:

```bash
./modbus_slave -p /dev/ttyUSB0 -b 115200
```

Теперь по адресу 1 на порту `/dev/ttyUSB0` отвечает виртуальный Modbus-slave с 20 регистрами (FC03). Значения случайные, обновляются при каждом запросе.

Проверка с помощью `mbpoll`:

```bash
mbpoll -a 1 -b 115200 -r 1 -c 10 /dev/ttyUSB0
```

## Несколько устройств

Запуск 5 устройств на одном порту (slave ID 1..5):

```bash
./modbus_slave -p /dev/ttyUSB0 -b 115200 -a 5
```

Максимум -- 30 устройств. Каждое отвечает на FC03 (Read Holding Registers), 20 регистров по адресам 0..19.

## Реальные данные из файлов

По умолчанию регистры заполняются случайными числами. Но можно привязать к устройству текстовый файл - одно число на строку, до 20 строк:

```bash
./modbus_slave -p /dev/ttyUSB0 -b 115200 -a 3 \
  -f 1:/tmp/cpu.dat \
  -f 2:/tmp/time.dat
```

Здесь slave 1 читает регистры из `/tmp/cpu.dat`, slave 2 - из `/tmp/time.dat`, а slave 3 отдаёт случайные значения.

Формат файла - просто числа, по одному на строку:

```
42
1024
65535
0
```

### Скрипты-источники

В каталоге `scripts/` лежат примеры скриптов, которые пишут данные в файлы:

`cpu_temp_to_modbus.sh` - температура процессора:

```bash
#!/bin/bash
while true; do
  temp=$(cat /sys/class/thermal/thermal_zone0/temp)
  echo $((temp / 1000)) > /tmp/cpu.dat
  sleep 1
done
```

`time_to_modbus.sh` - текущее время (часы, минуты, секунды в отдельных регистрах):

```bash
#!/bin/bash
while true; do
  echo $(date +%H) > /tmp/time.dat
  echo $(date +%M) >> /tmp/time.dat
  echo $(date +%S) >> /tmp/time.dat
  sleep 1
done
```

Можно написать свой скрипт, который читает данные с любого источника (I2C, 1-Wire, sysfs, MQTT, HTTP API) и пишет числа в файл. Файлы рекомендуется размещать в `/tmp` -- это tmpfs (RAM-диск), SD-карта не изнашивается.

## Защита от устаревших данных

Если скрипт-источник упал, файл регистров перестаёт обновляться. Без защиты мастер будет бесконечно читать устаревшие значения и не заметит проблему.

Параметр `-t` задаёт порог устаревания в секундах (по умолчанию 10):

```bash
./modbus_slave -p /dev/ttyS7 -b 115200 -a 2 -f 1:/tmp/cpu.dat -t 10
```

Если файл не обновлялся дольше 10 секунд, все его регистры возвращают ноль. Мастер сразу видит, что данные невалидны.

Отключить проверку: `-t 0`.

## Настройка порта

Параметр `-o` задаёт формат кадра (по умолчанию 8N1):

```bash
./modbus_slave -p /dev/ttyUSB0 -b 9600 -o 8E1
```

Поддерживаемые форматы: `8N1`, `8E1`, `8O1`, `7E1`, `8N2`.

## Работа в фоне (демон)

На Linux утилита умеет уходить в фон:

```bash
./modbus_slave -p /dev/ttyS7 -b 115200 -a 5 -f 1:/tmp/cpu.dat -d
```

В режиме демона логи пишутся в syslog, PID сохраняется в `/var/run/modbus_slave.pid` (или `/tmp/modbus_slave.pid` если нет прав на `/var/run`).

Остановить демон:

```bash
./modbus_slave -k
```

Посмотреть статус:

```bash
./modbus_slave -s
```

### Автозапуск через systemd

В каталоге `service/` лежит готовый unit-файл. Установка:

```bash
sudo cp modbus_slave /usr/local/bin/
sudo cp service/modbus_slave.service /etc/systemd/system/
```

Отредактируйте параметры запуска в `modbus_slave.service` (порт, скорость, количество устройств, файлы), затем:

```bash
sudo systemctl daemon-reload
sudo systemctl enable modbus_slave
sudo systemctl start modbus_slave
```

Логи:

```bash
journalctl -u modbus_slave -f
```

## Статистика

Утилита периодически выводит статистику запросов -- общее количество, количество по каждому slave ID, ошибки CRC. В режиме демона статистика идёт в syslog. Это удобнее, чем лог каждого запроса -- не засоряет вывод при интенсивном опросе.

## Windows

На Windows всё работает аналогично, кроме демонизации -- вместо `-d` используется `-bg`:

```
modbus_slave.exe -p COM3 -b 115200 -a 5 -f 1:C:\tmp\cpu.dat -bg
```

Для портов с номером 10 и выше используйте формат `\\.\COM10`.

Остановить:

```
modbus_slave.exe -k
```

## Детали протокола

| Параметр | Значение |
|----------|----------|
| Протокол | Modbus RTU |
| Функция | FC03 (Read Holding Registers) |
| Регистров на устройство | 20 (адреса 0..19) |
| Максимум устройств | 30 (ID 1..30) |
| CRC | CRC16 (полином 0xA001) |
| Разделитель кадров | 10 мс тишины |

## Вывод команды mosbus-slave с подсказкой и примерами

```

root@napic:~/napi-scripts/sensors/py# modbus-slave
modbus_slave — Modbus RTU Slave Emulator
Simulates up to 30 independent slave devices on one serial port.
Each slave responds to FC03 with 20 holding registers.

Usage:
  modbus-slave -p <port> -b <baud> [options]
  modbus-slave -k
  modbus-slave -s

Required:
  -p <port>       serial port (Linux: /dev/ttyUSB0, /dev/ttyS7)
  -b <baud>       baud rate: 1200 2400 4800 9600 19200 38400
                             57600 115200 230400 460800 921600

Optional:
  -a <n>          number of slave devices: 1..30 (default: 1)
                  slave IDs are assigned 1..n
  -o <mode>       port framing (default: 8N1)
                  databits : 7 or 8
                  parity   : N=none  E=even  O=odd
                  stopbits : 1 or 2
                  examples : 8N1  8E1  8O1  7E1  8N2
  -f <id>:<file>  bind register file to slave <id>
                  can be specified multiple times
                  file format: one integer (0..65535) per line
                  missing lines -> 0, file absent -> all zeros
                  slave without -f uses random values
                  recommended path: /tmp/s1.dat (tmpfs, no SD writes)
                  atomic update: write to .tmp then mv
  -t <sec>        max file age in seconds (default: 10)
                  if file not updated within <sec>s -> return zeros
                  use -t 0 to disable
  -d              run as daemon (logs -> syslog / journalctl)

Control:
  -k              stop running daemon
  -s              show daemon status

------------------------------------------------------------
Quick start examples:

  # 1. Simplest: one slave (ID=1), random registers
  #    server: modbus-slave -p /dev/ttyUSB0 -b 115200
  #    client: mbpoll -m rtu -b 115200 -P none -a 1 -r 1 -c 20 /dev/ttyUSB0
  modbus-slave -p /dev/ttyUSB0 -b 115200

  # 2. Five slaves, all random (IDs 1..5)
  #    server: modbus-slave -p /dev/ttyUSB0 -b 115200 -a 5
  #    client: mbpoll -m rtu -b 115200 -P none -a 3 -r 1 -c 20 /dev/ttyUSB0
  modbus-slave -p /dev/ttyUSB0 -b 115200 -a 5

  # 3. Two slaves with real data (IDs 1,2), rest random (IDs 3..5)
  #    server: modbus-slave -p /dev/ttyUSB0 -b 115200 -a 5 -f 1:/tmp/cpu.dat -f 2:/tmp/time.dat
  #    client: mbpoll -m rtu -b 115200 -P none -a 1 -r 1 -c 20 /dev/ttyUSB0
  modbus-slave -p /dev/ttyUSB0 -b 115200 -a 5 \
      -f 1:/tmp/cpu.dat \
      -f 2:/tmp/time.dat

  # 4. RS-485 port, 10 slaves (IDs 1..10), daemon mode
  #    server: modbus-slave -d -p /dev/ttyS7 -b 115200 -a 10 -f 1:/tmp/cpu.dat -t 15
  #    client: mbpoll -m rtu -b 115200 -P none -a 1 -r 1 -c 20 /dev/ttyUSB0
  modbus-slave -d -p /dev/ttyS7 -b 115200 -a 10 \
      -f 1:/tmp/cpu.dat -t 15

  # 5. Different port framing
  modbus-slave -p /dev/ttyUSB0 -b 9600 -o 8E1 -a 3

  # 6. Stop / status
  modbus-slave -k
  modbus-slave -s
------------------------------------------------------------
Register file format example (/tmp/cpu.dat):
  4523    <- reg 0: temperature * 100 = 45.23 C
  1013    <- reg 1: pressure hPa
  0       <- reg 2: reserved
  ...     <- up to 20 lines; missing lines -> 0

Helper scripts (write files from real sensors):
  cpu_temp_to_modbus.sh  — CPU temperature from sysfs
  time_to_modbus.sh      — current time (HH MM SS DD MM YYYY)

root@napic:~/napi-scripts/sensors/py#

```
## Ссылки

- Репозиторий: [github.com/lab240/modbus-slave](https://github.com/lab240/modbus-slave)
- Лицензия: MIT
