---
sidebar_position: 10
title: GitHub репозитории
---

# GitHub репозитории

Открытый исходный код и инструменты от команды NapiLab.

> Репозитории lab240: [github.com/lab240](https://github.com/lab240)
> Репозитории napilab: [github.com/napilab](https://github.com/napilab)

---

## Сборки Linux для NAPI

### napi-openwrt-build
OpenWRT для плат NAPI2, NAPI-C, NAPI-P, Napi-Slot- компактный Linux-роутер с Веб-интерфейсом (200 МБ). Поддержка LTE, Modbus, Zigbee2mqtt.

[github.com/lab240/napi-openwrt-build](https://github.com/lab240/napi-openwrt-build)

### napi-debian-build
Debian для плат NAPI. Полноценный Debian для NAPI-C, NAPI-P, Napi-Slot с патчами и твиками для NAPI.

[github.com/lab240/napi-debian-build](https://github.com/lab240/napi-debian-build)

### napi-armbian-build
Armbian для плат NAPI. Полноценный Armbian с патчами и твиками для NAPI.

[github.com/lab240/napi-debian-build](https://github.com/lab240/napi-armbian-build)

---

## Утилиты Modbus

### mbscan
Быстрый сканер Modbus RTU шины. Находит все устройства на шине. Без зависимостей.
Готовые бинарники для x86_64 и aarch64.

[github.com/lab240/mbscan](https://github.com/lab240/mbscan)

### modbus-slave
Эмулятор Modbus RTU slave. До 30 устройств в одном процессе.
Удобен для тестирования без реального железа.

[github.com/lab240/modbus-slave](https://github.com/lab240/modbus-slave)

### luci-app-mbpoll
LuCI-приложение для OpenWRT - опрос Modbus-устройств через Веб-интерфейс.

[github.com/lab240/luci-app-mbpoll](https://github.com/lab240/luci-app-mbpoll)

### modlink
Опрашивает Modbus TCP устройства и раздаёт данные через RTU serial интерфейс. Написан на Go.

[github.com/napilab/modlink](https://github.com/napilab/modlink)

### mbus-gw-t2r
Многопоточный шлюз Modbus TCP - multi Modbus RTU. Поддержка множества RS485/RS232 портов.

[github.com/napilab/mbus-gw-t2r](https://github.com/napilab/mbus-gw-t2r)

---
## Утилиты IP

### discoverd
Минималистичный сервис обнаружения устройств в локальной сети.

[github.com/napilab/discoverd](https://github.com/napilab/discoverd)

---

## Железо. Платы NAPI.

### napi-boards
Описание и материалы по платам проекта NAPI.

[github.com/napilab/napi-boards](https://github.com/napilab/napi-boards)

---

## Мониторинг и визуализация

### telegraf-grafana-configs
Готовые конфиги Telegraf и дашборды Grafana для работы с датчиками через Modbus.

[github.com/lab240/telegraf-grafana-configs](https://github.com/lab240/telegraf-grafana-configs)

### grafana-docker
Docker Compose для быстрого запуска Grafana с преднастроенными источниками данных.

[github.com/lab240/grafana-docker](https://github.com/lab240/grafana-docker)

---

## Скрипты и примеры

### napi-scripts
Учебные скрипты для работы с платами NAPI. Примеры работы с GPIO, Modbus, датчиками.

[github.com/lab240/napi-scripts](https://github.com/lab240/napi-scripts)

### esp8266-modbus-stand
Прошивка Modbus-стенда на WemosD1 (ESP8266). Эмулятор Modbus RTU slave для отладки и обучения.

[github.com/lab240/esp8266-modbus-stand](https://github.com/lab240/esp8266-modbus-stand)

---

## APT репозиторий

Готовые бинарные пакеты для arm64 и amd64 доступны через apt:

```bash
curl -fsSL https://repo.napilab.ru/napilab.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/napilab.gpg > /dev/null
echo "deb [arch=arm64 signed-by=/usr/share/keyrings/napilab.gpg] https://repo.napilab.ru stable main" | sudo tee /etc/apt/sources.list.d/napilab.list
sudo apt update && sudo apt install mbusd mbscan modbus-slave
```

Подробнее: [repo.napilab.ru](https://repo.napilab.ru)
