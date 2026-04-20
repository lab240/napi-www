---
sidebar_position: 5
title: Прошивки и образы
---

# Прошивки и образы

Здесь вы можете скачать программное обеспечение для продуктов NAPI.

> **[Сервер загрузок](https://download.napilinux.ru/)**

---
## Napi-C, Napi-P, Napi-Slot  - NapiLinux

> **Также подходит для FCC3308, FCCM3308, FCU3308**

 Собрано командой NapiLab, фреймворк Yocto\
 Содержит в составе инструменты работы с датчиками, базу данных\
 Управляется через ssh\console, частично управляется через Веб NapiConfig\
 Подробнее: http://napilinux.ru

![NapiLinux Logo](../../static/img/logo/napilinux-logo.jpeg)

> **Примечание:** Для NapiLinux проверяйте последнюю версию на [главной странице загрузок](https://download.napilinux.ru/napilinux/)

| Плата | Ядро | Особенности | Ссылка |
|-------|------|-------------|--------|
| Napi-P/C/Slot | vendor 6.6 | NapiConfig (Веб), telegraf, influxdb, mbusd | **[Скачать](https://download.napilinux.ru/napilinux/0.2.6.1/napilinux-napi-rk3308b-s-dev/)** |

---
## Napi-C, Napi-P, Napi-Slot   - Armbian

> **Также подходит для FCC3308, FCCM3308, FCU3308**

 Собрано командой NapiLab, фреймворк ArmbianBuild.\
 Cтандартный Armbian (база - ubuntu noble) c dts, патчами, твиками (улучшалками) для Napi\
 Работают все репозитории Ubuntu\Debian через apt-get, поддерживаются deb\
 Подробнее: http://armbian.com

![Armbian Logo](../../static/img/logo/armbian-logo.jpeg)

| Плата | Ядро | Особенности | Ссылка |
|-------|------|-------------|--------|
| Napi-P/C/Slot | current 6.12 | Стандартная система | **[Скачать](https://download.napilinux.ru/linuximg/napic/armbian/)** |
| Napi-P/C/Slot | спецсборка (snapshot) | координатор Zigbee, Zigbee2mqtt | **[Скачать](https://download.napilinux.ru/linuximg/napic/special/napic-armabian-zibee2mqtt/)** |

---
## Napi-C, Napi-P, Napi-Slot   - OpenWRT {#napi-pcslot---openwrt}

> **Также подходит для FCC3308, FCCM3308, FCU3308**

 Собрано командой NapiLab, фреймворк OpenWRT Build.\
 Компактнейший вариант Linux для Embedded (200Мб весь имидж), оптимизированный для Napi.\
 Установка доп пакетов и модулей через менеджер apk\
 Подробнее: https://github.com/lab240/napi-openwrt-build

![OpenWRT Logo](../../static/img/logo/openwrt-logo.jpeg)

| Плата | Ядро | Особенности | Ссылка |
|-------|------|-------------|--------|
| Napi-P/C/Slot | current 6.12 | bash, lte support (qmi), mbusd, mosquitto, mbpoll, python3 | **[Скачать](https://download.napilinux.ru/linuximg/napic/openwrt/)** |

---
## Napi-C, Napi-P, Napi-Slot  - Debian

> **Также подходит для FCC3308, FCCM3308, FCU3308**

 Собрано командой NapiLab, фреймворк Debian Build.\
 Любимый Debian!\
 Подробнее: https://github.com/lab240/napi-debian-build/blob/main/README-RU.md

![Debian Logo](../../static/img/logo/debian.jpeg)

| Плата | Ядро | Особенности | Ссылка |
|-------|------|-------------|--------|
| Napi-P/C/Slot | current 6.6 | all Debian + repo.napilab.ru | **[Скачать](https://download.napilinux.ru/linuximg/napic/debian/)** |

---
## NAPI2 - Armbian

  Собрано командой NapiLab, фреймворк ArmbianBuild.\
  Стандартный Armbian (база - ubuntu noble) c dts, патчами, твиками (улучшалками) для Napi\
  Графический интерфейс Xfce, браузер Firefox (Chrome), vncserver и другой софт\
  Работают все репозитории Ubuntu\Debian через apt-get, поддерживаются deb\
  Подробнее: http://armbian.com

![Armbian Logo](../../static/img/logo/armbian-logo.jpeg)

| Плата | Ядро | Особенности | Ссылка |
|-------|------|-------------|--------|
| NAPI2 | vendor 6.1 / current 6.12 | server/minimal - полноценная система без графики | **[Скачать](https://download.napilinux.ru/linuximg/napi2/armbian-ditrib/)** |
| NAPI2 | vendor/current | desktop - xfce, firefox, lvds support (только vendor) | **[Скачать](https://download.napilinux.ru/linuximg/napi2/armbian-ditrib/)** |

---
## NAPI2 - NapiLinux

 Собрано командой NapiLab, фреймворк Yocto\
 Содержит в составе инструменты работы с датчиками, базу данных\
 Управляется через ssh\console, частично управляется через Веб NapiConfig\
 Подробнее: http://napilinux.ru

![NapiLinux Logo](../../static/img/logo/napilinux-logo.jpeg)

> **Примечание:** Для NapiLinux проверяйте последнюю версию на [главной странице загрузок](https://download.napilinux.ru/napilinux/)

| Плата | Ядро | Особенности | Ссылка |
|-------|------|-------------|--------|
| NAPI2 | vendor 6.6 | NapiConfig (Веб), telegraf, influxdb, mbusd. Без GUI | **[Скачать](https://download.napilinux.ru/napilinux/0.2.6.1/napilinux-napi-2-dev/)** |

---
## NAPI2 - OpenWRT

 Полноценный промышленный роутер на NAPI2 с Веб-интерфейсом.\
 Подробнее: https://github.com/lab240/napi-openwrt-build

![OpenWRT Logo](../../static/img/logo/openwrt-logo.jpeg)

| Плата | Ядро | Особенности | Ссылка |
|-------|------|-------------|--------|
| NAPI2 | current 6.12 | bash, lte support (qmi), mbusd, mosquitto, mbpoll, python3 | **[Скачать](https://download.napilinux.ru/linuximg/napi2/openwrt/)** |

---
## IMAGE ZERO - нулевая прошивка для всех плат

> **[Пустой имидж для затирания NAND\EMMC](https://download.napilinux.ru/zeroimg/)**

---
## FCUCM4 - Debian

> **[Debian](https://download.napilinux.ru/linuximg/fcucm4/)**

---

Если вы не можете найти нужную прошивку или у вас есть вопросы, пожалуйста, [свяжитесь с нами](mailto:napi@nnz.ru).

> *Программное обеспечение предоставляется "как есть", команда NAPI не несет ответственность за ошибки и баги.*
