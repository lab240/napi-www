---
sidebar_position: 6
sidebar_label: Коллекция полезных DTS
slug: /dts-samples
description: "Подробное руководство по Device Tree для ARM-плат: что такое DTS, DTB и overlay, как работает armbianEnv.txt, user_overlays, armbian-add-overlay. Примеры для NAPI-C (RK3308) - UART, I2C, SPI, W5500, DS3231."
keywords: [device tree, dts, dtb, dtbo, overlay, device tree overlay, armbian overlay, armbianEnv.txt, user_overlays, armbian-add-overlay, RK3308, RK3568, NAPI-C, NAPI2, Rockchip, pinmux, I2C overlay, SPI overlay, UART overlay, W5500, DS3231, DS1307, embedded linux, одноплатный компьютер, дерево устройств]
---

# Коллекция полезных DTS для NAPI

## DTS для NAPI-C, NAPI-P

### RS485 на UART1 RTS через GPIO

Оверлей для RS485 на UART1 (Napi-C) c контролем направления через **GPIO2_B4**

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

### Диод blue-led (heartbeat) на GPIO2B4

Перевод blue-led на `GPIO2B4` (Аrmbian).

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

### RS485 на UART1 c аппаратным RTS для NAPI-C, NAPI-P

Аппаратный RTS для UART1 находится на **GPIO1_C7**

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
      pinctrl-0 = <&uart1_xfer &uart1_rts>;

      linux,rs485-enabled-at-boot-time;
      rs485-rts-active-low;
      rs485-rts-delay = <0 0>;
    };
  };
};
```

## DTS для NAPI2

### RS485 на UART3 с аппаратным RTS для NAPI2

В NAPI2 только UART3 можно реализовать с аппаратным RTS на **GPIO1_A2**

```dts

/dts-v1/;
/plugin/;
/ {
	fragment@0 {
    		target = <&uart3>;
    		__overlay__ {
			pinctrl-names = "default";
			pinctrl-0 = <&uart3m0_xfer &uart3m0_rtsn>;

			linux,rs485-enabled-at-boot-time;
			rs485-rts-delay = <0 0>;
			rs485-rts-active-low;

        		status = "okay";
    		};
	};
};
```

### UART7 без RS485

```
/dts-v1/;
/plugin/;

/ {
    compatible = "rockchip,rk3568";

    /* Включаем контроллер UART7 и вешаем его на группу uart7m1_xfer */
    fragment@0 {
        target = <&uart7>;
        __overlay__ {
            status = "okay";

            pinctrl-names = "default";
            pinctrl-0 = <&uart7m1_xfer>;  /* UART7_TX_M1 / UART7_RX_M1 */
        };
    };
};
```

### RS485 на UART7

GPIO RTS - **GPIO3_B5**

```
/dts-v1/;
/plugin/;

/ {
    compatible = "rockchip,rk3568";

    /* Включаем контроллер UART7 и вешаем его на группу uart7m1_xfer */
    fragment@0 {
        target = <&uart7>;
        __overlay__ {
             pinctrl-0 = <&uart7m1_xfer>;
            pinctrl-names = "default";
            rts-gpios = <&gpio3 RK_PB5 GPIO_ACTIVE_HIGH>;
            rs485-rts-active-high;
            linux,rs485-enabled-at-boot-time;
            status = "okay";
        };
    };
};
```

### LVDS (только для vendor kernel)

Подключение LVDS с определенными параметрами (переметы можно менять в DTS)

```

/dts-v1/;
/plugin/;
/ {
	fragment@0 {
		target-path = "/";
		__overlay__ {
			backlight: backlight {
				compatible = "gpio-backlight";
				gpios = <&gpio0 19 0>;
				default-on;
			};
			vcc3v3_lcd0_n: vcc3v3-lcd0-n {
				compatible = "regulator-fixed";
				regulator-name = "vcc3v3_lcd0_n";
				regulator-min-microvolt = <3300000>;
				regulator-max-microvolt = <3300000>;
				enable-active-high;
				gpio = <&gpio0 23 0>;
				regulator-boot-on;
			};
			panel-lvds0 {
				compatible = "simple-panel";
				backlight = <&backlight>;
				power-supply = <&vcc3v3_lcd0_n>;
				enable-delay-ms = <20>;
				prepare-delay-ms = <20>;
				unprepare-delay-ms = <20>;
				disable-delay-ms = <20>;
				bus-format = <0x1011>;
				width-mm = <261>;
				height-mm = <163>;
				display-timings {
					native-mode = <&timing0>;
					timing0: timing0 {
						clock-frequency = <71000000>;
						hactive = <1280>;
						hfront-porch = <48>;
						hsync-len = <32>;
						hback-porch = <80>;
						vactive = <800>;
						vfront-porch = <3>;
						vsync-len = <6>;
						vback-porch = <14>;
						hsync-active = <0>;
						vsync-active = <0>;
						de-active = <0>;
						pixelclk-active = <0>;
					};
				};
				ports {
					#address-cells = <1>;
					#size-cells = <0>;
					port@0 {
						reg = <0>;
						panel_in_lvds: endpoint {
							remote-endpoint = <&lvds_out_panel>;
						};
					};
				};
			};
		};
	};
	fragment@1 {
		target-path = "/phy@fe850000";
		__overlay__ {
			status = "okay";
		};
	};
	fragment@2 {
		target-path = "/syscon@fdc60000/lvds";
		__overlay__ {
			status = "okay";
		};
	};
	fragment@3 {
		target-path = "/syscon@fdc60000/lvds/ports/port@0/endpoint@1";
		__overlay__ {
			status = "okay";
		};
	};
	fragment@4 {
		target-path = "/syscon@fdc60000/lvds";
		__overlay__ {
			ports {
				#address-cells = <1>;
				#size-cells = <0>;
				port@1 {
					reg = <1>;
					lvds_out_panel: endpoint {
						remote-endpoint = <&panel_in_lvds>;
					};
				};
			};
		};
	};
	fragment@5 {
		target-path = "/vop@fe040000/ports/port@1/endpoint@4";
		__overlay__ {
			status = "okay";
		};
	};
	fragment@6 {
		target-path = "/display-subsystem/route/route-lvds";
		__overlay__ {
			status = "okay";
			connect = <&vp1_out_lvds>;
		};
	};
};

```
