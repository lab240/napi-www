---
slug: gpio-pinmux-debug
title: Диагностика занятости GPIO пинов в Linux
authors: dmn
tags: [gpio, pinmux, debug, rockchip, pinctrl]
telegram_id: 30
---

## Диагностика занятости GPIO

В Linux можно посмотреть чем заняты все GPIO:

```bash
cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
```

### Пример вывода на NAPI-C

```
root@rockpi-s:~# cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins
Pinmux settings per pin
Format: pin (name): mux_owner gpio_owner hog?
pin 0 (gpio0-0): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 1 (gpio0-1): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 2 (gpio0-2): sdio-pwrseq gpio0:2 function sdio-pwrseq group wifi-enable-h
pin 3 (gpio0-3): ff480000.mmc (GPIO UNCLAIMED) function sdmmc group sdmmc-det
pin 4 (gpio0-4): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 5 (gpio0-5): leds gpio0:5 function leds group heartbeat-led
pin 6 (gpio0-6): leds gpio0:6 function leds group green-led
pin 7 (gpio0-7): stmmac-0:01 gpio0:7 function gmac group mac-rst
pin 8 (gpio0-8): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 9 (gpio0-9): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 10 (gpio0-10): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 11 (gpio0-11): ff050000.i2c (GPIO UNCLAIMED) function i2c1 group i2c1-xfer
pin 12 (gpio0-12): ff050000.i2c (GPIO UNCLAIMED) function i2c1 group i2c1-xfer
pin 13 (gpio0-13): ff180000.pwm (GPIO UNCLAIMED) function pwm0 group pwm0-pin-pull-down
pin 14 (gpio0-14): (MUX UNCLAIMED) (GPIO UNCLAIMED)
pin 15 (gpio0-15): (MUX UNCLAIMED) (GPIO UNCLAIMED)
```

### Пример занятого GPIO

Например, `GPIO0-A5` занят и мы не можем его использовать, например как DE для UART без лишних "процедур" по его освобождению:

```bash
root@rockpi-s:~/S4-GPIO2_A5# cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep gpio0-5
pin 5 (gpio0-5): leds gpio0:5 function leds group heartbeat-led
root@rockpi-s:~/S4-GPIO2_A5#
```

### Пример свободного GPIO

А вот `GPIO2-B4` выглядит как свободный:

```bash
root@rockpi-s:~/S4-GPIO2_A5# cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep gpio2-12
pin 76 (gpio2-12): (MUX UNCLAIMED) (GPIO UNCLAIMED)
```

И мы можем его программно "дергать":

```bash
root@rockpi-s:~/S4-GPIO2_A5# gpioset gpiochip2 12=1
root@rockpi-s:~/S4-GPIO2_A5# gpioset gpiochip2 12=0
root@rockpi-s:~/S4-GPIO2_A5#
```

### Использование GPIO в DTS

А теперь "захватим" пин `GPIO2_A5` для DE в UART1 таким DTS:

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
      rts-gpios = <&gpio2 5 0>;
    };
  };
};
```


### Проверка захвата GPIO

Посмотрим как выглядит пин:

```bash
root@rockpi-s:~/S4-GPIO2_A5# cat /sys/kernel/debug/pinctrl/pinctrl-rockchip-pinctrl/pinmux-pins | grep gpio2-5
pin 69 (gpio2-5): (MUX UNCLAIMED) gpio2:69
root@rockpi-s:~/S4-GPIO2_A5#
```

Тут не слишком понятно захватился он драйвером RS485 или нет. Но что важно, Linux не даст больше им "мигать", если он занят драйвером ядра:

```bash
root@rockpi-s:~/S4-GPIO2_A5# gpioset gpiochip2 5=0
gpioset: error setting the GPIO line values: Device or resource busy
root@rockpi-s:~/S4-GPIO2_A5# gpioset gpiochip2 5=1
gpioset: error setting the GPIO line values: Device or resource busy
root@rockpi-s:~/S4-GPIO2_A5#
```
### Тестирование UART1

Осталось убедиться, что мы получаем данные через UART1:

```bash
root@rockpi-s:~/S4-GPIO2_A5# mbpoll -m rtu -P none -b 115200 -a 125 -r 1 -c 4 -t4   /dev/ttyS1
mbpoll 1.0-0 - FieldTalk(tm) Modbus(R) Master Simulator
Copyright © 2015-2019 Pascal JEAN, https://github.com/epsilonrt/mbpoll
This program comes with ABSOLUTELY NO WARRANTY.
This is free software, and you are welcome to redistribute it
under certain conditions; type 'mbpoll -w' for details.

Protocol configuration: Modbus RTU
Slave configuration...: address = [125]
                        start reference = 1, count = 4
Communication.........: /dev/ttyS1,     115200-8N1
                        t/o 1.00 s, poll rate 1000 ms
Data type.............: 16-bit register, output (holding) register table

-- Polling slave 125... Ctrl-C to stop)
[1]:   125
[2]:   1
[3]:   851
[4]:   772

```
