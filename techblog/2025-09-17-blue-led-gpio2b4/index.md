---
slug: blue-led-gpio2b4
title: Перенос blue-led на GPIO2B4 в Armbian
authors: dmn
tags: [gpio, led, overlay, armbian, dts, spi]
telegram_id: 20
---

## Перевод blue-led на GPIO2B4

Перевод blue-led на `GPIO2B4` (Аrmbian).
(В предыдущем примере `GPIO3B3` попало на SPI1-CLK)

### Файл конфигурации

```bash

root@rockpi-s:~# cat blue-led-gpio2b4-1.dts
```

```dts

/dts-v1/;
/plugin/;

/ {
    fragment@0 {
        /* у вас узел именно под /leds */
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
#napi #dts
