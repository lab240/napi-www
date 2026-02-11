---
slug: ft232-eeprom-reading
title: Чтение и программирование EEPROM преобразователя FT232
authors: dmn
tags: [ft232, eeprom, usb, uart, linux, cbus]
telegram_id: 14
---

Читаем внутреннюю прошивку преобразователя rtu-usb ft232 под Linux (armbian na Napi-C)

Ставим софт
```
sudo apt install libftdi1-2 libftdi1-dev ftdi-eeprom
```

Читаем
```
touch c.txt #создаем пустой файл

#vendor/product смотрим в lsusb
echo 'vendor_id=0x0403
product_id=0x6001' > c.txt
```
```
ftdi_eeprom --read-eeprom c.txt  --verbose

```
Получаем результат

```
FTDI eeprom generator v0.17
(c) Intra2net AG and the libftdi developers <opensource@intra2net.com>
Unable to find FTDI device with description: i:0403:6001
Error code: -3 (device not found)
root@rockpi-s:~# ftdi_eeprom --read-eeprom c.txt  --verbose

FTDI eeprom generator v0.17
(c) Intra2net AG and the libftdi developers <opensource@intra2net.com>
Unable to find FTDI devices under given vendor/product id: 0x0/0x0
Error code: -3 (device not found)
Retrying with default FTDI pid=0x6001.
FTDI read eeprom: 0
EEPROM size: 128
VID:     0x0403
PID:     0x6001
Release: 0x0000
Bus Powered:  90 mA USB Remote Wake Up
Manufacturer: FTDI
Product:      FT232R USB UART
Serial:       A10M5ZU3
Checksum      : 17cb
Internal EEPROM
Oscillator: Internal
Enable Remote Wake Up
PNP: 1
Channel A has Mode UART VCP
C0 Function: TXLED
C1 Function: RXLED
C2 Function: TXDEN
C3 Function: PWREN
C4 Function: SLEEP
Warning: Not writing eeprom, you must supply a valid filename
FTDI close: 0
```

Этой же программой можно писать
параметры в еепром ft232, создав конфигурационный файлик.

🙋‍♀️Зачем это надо ?

- Проверить жив ли ft232
- Проверить назначение линий CBUS (C0-C4), которые могут быть переопределены.

👍 Полезные факты

- `lsusb -v` — должно быть состояние `bConfigurationValue = 1`

- `PWREN` # после того как модуль инициализирован драйвером должен быть в НУЛЕ (`0`)

- `SLEEP` #у FTDI — это сигнал, который показывает, что чип перешёл в режим сна (USB suspend).

Когда USB-шина в нормальном рабочем состоянии → `SLEEP# = 1` (логическая единица).

Когда хост перевёл устройство в режим suspend (спящий режим по USB, обычно при бездействии или энергосбережении) → `SLEEP# = 0`.


😂 Несколько подсказок от чатГПТ (я не проверял)

1. Сохранить сырой еепром

```bash
sudo ftdi_eeprom --read-eeprom текущий.conf --device ft232 --small-eeprom --eeprom-filename дамп.bin
```

2. Файл, если нужно прошить свои кастом параметры (`ftdi.conf`)

```conf
vendor_id=0x0403
product_id=0x6001
manufacturer="MyCompany"
product="My FT232R"
serial="FT123456"

# CBUS configuration:
cbus0=1   # Можно оставить как есть или назначить PWREN
cbus1=1   # PWREN, к примеру
cbus2=0   # TXDEN
cbus3=2   # RXLED (имитация RXDEN через LED#)
cbus4=4   # TXRXLED
```

Как писать

```bash
sudo ftdi_eeprom --flash-eeprom ftdi.conf
```
#sys #ft232 #linux
