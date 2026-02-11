---
slug: cm4-uart-configuration
title: Конфигурация UART на модуле CM4 в Токосборщике
authors: dmn
tags: [uart, cm4, orangepi, overlay, modbus, zigbee]
telegram_id: 12
---

В Токосборщике на модуле CM4 UART-ы расположились следующим образом:

✔️`UART3` - внешний датчик Modbus
✔️`UART9` - модуль расширений (Zigbee)
✔️`UART7` - встроенный датчик тока

Для корректной работе Debian, необходимо подключить оверлеи с uart7,9 в файле `/boot/orangepiEnv.txt`

```bash
root@orangepicm4:~# cat /boot/orangepiEnv.txt 
```

```
verbosity=1
bootlogo=false
extraargs=cma=128M
overlay_prefix=rk356x
overlays=uart7-m2 uart9-m2
rootdev=UUID=a0f8ca89-7eb7-4a1e-947a-2341637b4782
rootfstype=ext4
console=serial
```
#fcucm4 #orangecm4 #fcu