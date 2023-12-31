---
hide_table_of_contents: true
sidebar_position: 1
---

# Программное обеспечение

## NAPI Linux

:::tip Программная поддержка.

Мы рекомендуем и поддерживаем ОС [NapiLinux](http://www.napilinux.ru) как основную ОС для всех изделий на основе модуля NAPI. Мы также разрабатываем пакет NapiConfig - Веб-интерфейс для работы с сетью, сервисами, датчиками и периферийными устройствами. NapiConfig имеет базовый модуль и различные модули под конкретные реализации устройств.

**Про особенности и преимущества NapiLinux можно ознакомиться на профильном сайте (<http://www.napilinux.ru>).**

:::

## Armbian

Однако, на время отладки программных решений, разработки своего ПО или по другим причинам Вам может понадобиться классический Linux-дистрибутив с пакетным менеджером и возможностью устанавливать пакеты без сборки всей системы.

:::tip

Мы рекомендуем дистрибутив [Armbian](<https://www.armbian.com/>) - Debian подобный дистрибутив с пакетным менеджером для RockPI-S: <https://www.armbian.com/rockpi-s/>, который в виде имиджа доступен по [ссылке](<https://redirect.armbian.com/rockpi-s/Bookworm_current>).

Имя файла - Armbian_23.5.2_Rockpi-s_bookworm_current_6.1.32.img.xz; логин\пароль:  root\1234

:::

Для полноценной работы NAPI-устройств, после установки Armbian, необходимо применить [UART1 оверлей](https://github.com/dmnovikov/napiguide/raw/main/patches/armbian-dtbo/rk3308-uart1.dtbo) и [UART3 оверлей](https://github.com/dmnovikov/napiguide/raw/main/patches/armbian-dtbo/rk3308-uart3.dtbo) по следующему алгоритму:

1. Зайти под пользователем root
2. Создать папку /boot/overlay-user/
3. Положить в эту папку файлы ```rk3308-uart1.dtbo rk3308-uart3.dtbo``` не переименовывая (и другие оверлей-файлы при необходимости)
4. В файл /boot/armbianEnv.txt дописать ```user_overlays=rk3308-uart1 rk3308-uart3``` (и остальные файлы оверлеев через пробел)
5. Перезагрузиться

Параметры консольи Armbian: 8N1, 150000 (minicom -D /dev/ttyUSB0 -b 150000)

:boom: После того как система протестирована и отлажена, мы рекомендуем собрать NapiLinux с вашим набором пакетов через систему Yocto.
