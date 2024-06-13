---
slug: dmn-armbian-update-1
title: Обновление armbian для Napi P\C\S и Сборщиков
authors: dmn
tags: [napiworld, napi, modbusstand]
---

Мы обновили armbian для наших устройств

>:fire: Скачать можно по ссылке: https://packages.nnz-ipc.net/napilinux/armbian-napi-based-devs-rk3308bs/

<!--truncate-->

Какие изменения:

- Применены все обновления пакетов ARMbian на 12.06
- Добавлены пакеты telegraf, influxdb2
- Добавлены dts\dtb для I2C (3), SPI (2) 
- Добавлены скрипты-примеры опроса датчиков на python
- Обновлен скрипт тестирования скорости modbus
- mbusd обновлен до последней версии 0.5.2

Внимание !

>:warning: Внимание !  
>Это не апдейт, это новая чистая система без пользовательских данных. Сделайте бекап перед тем, как прошивать! Система апдейтов без потери пользовательских данных работает в [NapiLinux](http://napilinux.ru)

