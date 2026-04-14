---
slug: uart4-napilinux
title: Подключение UART4 в NapiLinux
authors: dmn
tags: [uart, napilinux, overlay, dts]
telegram_id: 6
description: "Включение UART4 в NapiLinux через механизм Device Tree Overlays. Пошаговая инструкция для NAPI-C на RK3308."
keywords: [uart4, napilinux, overlay, device tree, rk3308, последовательный порт, napi-c]
---

Для подключения uart4 в NapiLinux необходимо: 

✔️Создать папку `/boot/overlay-user`
✔️Положить в нее файл `rk3308-uart4.dtbo`
✔️Добавить строчку в файл `/boot/uEnv.txt`

```
user_overlays=rk3308-uart4 
```
✔️Перезагрузить систему
✔️Должно появиться устройство `/dev/ttyS4`

#napi #napioverlay #dts