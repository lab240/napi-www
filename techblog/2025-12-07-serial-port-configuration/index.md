---
slug: serial-port-configuration
title: Настройка параметров последовательного порта в Linux
authors: dmn
tags: [uart, serial, stty, linux, configuration]
telegram_id: 32
---

## Настройка последовательного порта

Установка параметров последовательного порта в Linux на примере `ttyS1`

### Просмотр текущих параметров

```bash
stty -F /dev/ttyS1 -a
```

**Пример вывода:**
```
speed 115200 baud; line = 0;
-brkint -icrnl -imaxbel
opost -onlcr
cs8 -parenb -cstopb
```

### Расшифровка параметров

- **`speed 115200 baud`** — текущая скорость
- **`cs8`** — 8 бит данных
- **`-parenb`** — без бита четности (N)
- **`-cstopb`** — 1 стоп-бит (если было `cstopb` → 2 стоп-бита)

### Установка параметров порта

```bash
stty -F /dev/ttyS1 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts
```

### Тестирование порта

Дальше можно прямо из командной строки:

```bash
echo "test" > /dev/ttyS1
```
