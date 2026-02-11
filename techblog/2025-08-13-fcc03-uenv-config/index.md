---
slug: fcc03-uenv-config
title: Конфигурация uEnv.txt для Сборщик компакт 0.3
authors: dmn
tags: [fcc03, uenv, rs485, rk3308, overlay]
telegram_id: 13
---

`uEnv.txt` для Сборщик компакт 0.3 (с блоком питания 1,2А)

```
verbosity=7
fdtfile=rk3308-napi-c.dtb
console=ttyS0,115200n8
overlays=rk3308-uart1 rk3308-uart3-m0 rk3308-i2c1-ds1338 rk3308-i2c3-m0 rk3308-usb20-host
kernelimg=Image
extraargs=
```

🔥Важно: RS485 у этой модели находится на `/dev/ttyS3`

#fcc #fcc03 #fcc3308