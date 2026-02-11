---
slug: rs485-uart1-overlay
title: Overlay для RS485 на UART1 с GPIO управлением направления
authors: dmn
tags: [rs485, uart, overlay, gpio, napi-c]
telegram_id: 29
---

## Оверлей для RS485 на UART1

Оверлей для RS485 на UART1 (Napi-C) c контролем направления через GPIO (DE=GPIO2_B4)

### Конфигурация DTS

```bash
root@rockpi-s:~/S3# cat uart1-de.dts
```

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
      rts-gpios = <&gpio2 12 0>;
    };
  };
};
```

#rs485 #napic
