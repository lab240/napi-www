---
slug: ethernet-led-control
title: Управление светодиодами Ethernet через MDIO
authors: dmn
tags: [ethernet, mdio, led, phytool, network]
telegram_id: 38
---

Утилита для управления mdio (в частности, подсветкой лампочек Ethernet): https://github.com/wkz/phytool

## Классический вид

Левый (зелёный) - линк, правый (рыжий) - данные:

1. Выбрать страницу LED конфигурации:
```bash
./phytool write wan/0/0x1f 0x0d04
```

2. (Опционально) отключить EEE LED влияние:
```bash
./phytool write wan/0/0x11 0x0000
```

3. Установить: LED1=Link(any speed), LED2=Activity:
```bash
./phytool write wan/0/0x10 0xC160
```

4. Вернуть страницу 0:
```bash
./phytool write wan/0/0x1f 0x0000
```

## Альтернативный вид

Слева (зелёный) Link+Act (подмешивает в один диод и линк и моргание данными) 10mbit, справа (рыжий) - Link + Act 100+Mbit:

1. Выбрать страницу LED конфигурации:
```bash
./phytool write wan/0/0x1f 0x0d04
```

2. (Опционально) отключить EEE LED влияние:
```bash
./phytool write wan/0/0x11 0x0000
```

3. Установить: LED1=Link+Act 10mbit, LED2=Link+Act 100+Mbit:
```bash
./phytool write wan/0/0x10 0x6251
```

4. Вернуть страницу 0:
```bash
./phytool write wan/0/0x1f 0x0000
```
