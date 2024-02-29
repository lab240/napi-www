---
sidebar_position: 56
---

# Установка gpiod и примеры работы c GPIO


> К сожалению, в репозитории пакетов ARMbian версия gpiod (libgpio2) версии 1.6.3, которая не совсем корректно читает GPIO (сбрасывая значение в нуль). Для корреткной работы с GPIO в NAPI необходимо поставить свежую gpiod из исходников.


Проверить текущую версию можно командой 

```
gpioget -v

root@napi-rk3308b-s:~# gpioget -v
gpioget (libgpiod) v1.6.3
Copyright (C) 2017-2018 Bartosz Golaszewski
License: LGPLv2.1
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```

Это старая версия ! 

Удаляем пакеты с старой версией 

```bash
apt remove gpiod libgpiod2

```

## Установка необходимых пакетов

```bash

apt install gettext-base gettext autoconf-archive

```

## Клонирование и компиляция

:::tip
На сайте проекта: https://github.com/brgl/libgpiod
есть инструкция по компиляции и примеры работы с утилитами !
:::

Скачиваем исходники из github

```bash
git clone https://github.com/brgl/libgpiod.git
```

Переходим в каталог и компилируем

```
cd libgpiod
mkdir m4
./autogen.sh --enable-tools=yes --prefix=/usr
make 
make install

```

## Проверяем работу с gpio

1. Проверяем видимость gpio чипов 

```
root@napi-armbian:~/libgpiod# gpiodetect
gpiochip0 [gpio0] (32 lines)
gpiochip1 [gpio1] (32 lines)
gpiochip2 [gpio2] (32 lines)
gpiochip3 [gpio3] (32 lines)
gpiochip4 [gpio4] (32 lines)
root@napi-armbian:~/libgpiod# 

```

2. Можем посмотреть какие GPIO доступны внутри чипов (например 2) 

```bash
root@napi-armbian:~/libgpiod# gpioinfo -c gpiochip2
gpiochip2 - 32 lines:
	line   0:	unnamed         	input
	line   1:	unnamed         	input
	line   2:	unnamed         	input
	line   3:	unnamed         	input
	line   4:	unnamed         	input
	line   5:	unnamed         	input
	line   6:	unnamed         	input
	line   7:	unnamed         	input
	line   8:	unnamed         	input
	line   9:	unnamed         	input
	line  10:	unnamed         	input
	line  11:	unnamed         	input
	line  12:	unnamed         	input
	line  13:	unnamed         	output
	line  14:	unnamed         	input
	line  15:	unnamed         	input
	line  16:	unnamed         	input
	line  17:	unnamed         	input
	line  18:	unnamed         	input
	line  19:	unnamed         	input
	line  20:	unnamed         	input
	line  21:	unnamed         	input
	line  22:	unnamed         	input
	line  23:	unnamed         	input
	line  24:	unnamed         	input
	line  25:	unnamed         	input
	line  26:	unnamed         	input
	line  27:	unnamed         	input
	line  28:	unnamed         	input
	line  29:	unnamed         	input
	line  30:	unnamed         	input
	line  31:	unnamed         	input
root@napi-armbian:~/libgpiod# 

```

3. Установить и прочитать статус GPIO

Установим GPIO13 в 1 (hi)

```bash
gpioset -t 0 -c gpiochip2 13=1
```

И прочитаем статус

```
root@napi-armbian:~/libgpiod# gpioget --numeric -a -c gpiochip2 13
1

```

Изменим статус GPIO13 в 0 (low)

```
gpioset -t 0 -c gpiochip2 13=0

```

И прочитаем статус

```
root@napi-armbian:~/libgpiod# gpioget --numeric -a -c gpiochip2 13
0

```

Надеемся, эта информация была полезна и Вам стало понятно, как можно работать с GPIO.

## Работа с GPIO через sysfs

Можно почитать здесь: https://developer.technexion.com/docs/using-gpio-from-a-linux-shell