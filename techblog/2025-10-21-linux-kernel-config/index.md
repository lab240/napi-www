---
slug: linux-kernel-config
title: Просмотр опций компиляции ядра Linux
authors: dmn
tags: [linux, kernel, config, uart, serial]
telegram_id: 22
---

Как посмотреть с какими опциями скомпилировано ядро Linux ?

```bash
zcat /proc/config.gz
```

Так же можно поставить фильтр - например, посмотрим все что касается последовательных портов

```bash
zcat /proc/config.gz | grep -E 'CONFIG_SERIAL_8250_NR_UARTS|CONFIG_SERIAL_8250|CONFIG_SERIAL_'
```
#linuxkernel #kernel #napikernel #uart