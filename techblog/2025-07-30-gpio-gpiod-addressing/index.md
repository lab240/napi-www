---
slug: gpio-gpiod-addressing
title: Адресация GPIO в gpiod на примере GPIO2_B4
authors: dmn
tags: [gpio, gpiod, addressing, rockchip]
telegram_id: 8
---

Как адресуются gpio в gpiod на примере `GPIO2_B4`. Есть банки 0-4 - это первая  цифра после GPIO ("2"). В каждом банке 32 ячейки. 

```
А0-А7 - 0 -7
B0-B7 - 8-15
C0-C7 - 16-24
D0-D7 - 25-31
```

Поэтому `GPIO2_B4` это банк 2, ячейка 12.

Опрашивается так:

```bash
gpioget --numeric -a -c gpiochip2 12
```

А устанавливается так:

```bash
gpioset -t 0 -c gpiochip2 12=1
```

Прочитать все банки:

```bash
gpiodetect
```

Прочитать банк:

```bash
gpioinfo -c gpiochip2
```
#gpio #napigpio