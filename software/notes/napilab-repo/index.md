---
sidebar_position: 22
title: Подключение репозитория NapiLab
description: Подключение apt-репозитория repo.napilab.ru с готовыми пакетами для arm64 и amd64. Установка mbusd, mbscan, modbus-slave.
keywords: [repo.napilab.ru, apt, репозиторий, arm64, amd64, mbusd, mbscan, modbus-slave, debian, armbian]
---

# Подключение репозитория NapiLab

Репозиторий **repo.napilab.ru** содержит готовые бинарные пакеты для работы с Modbus и другими промышленными протоколами. Поддерживаются архитектуры **amd64** и **arm64** (NAPI-C, NAPI2, Armbian).


## x86_64

```bash
curl -fsSL https://repo.napilab.ru/napilab.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/napilab.gpg > /dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/napilab.gpg] https://repo.napilab.ru stable main" | sudo tee /etc/apt/sources.list.d/napilab.list
sudo apt update
```

## ARM64

```bash
curl -fsSL https://repo.napilab.ru/napilab.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/napilab.gpg > /dev/null
echo "deb [arch=arm64 signed-by=/usr/share/keyrings/napilab.gpg] https://repo.napilab.ru stable main" | sudo tee /etc/apt/sources.list.d/napilab.list
sudo apt update
```

## Установка пакетов

```bash
sudo apt install mbusd mbscan modbus-slave
```

## Удаление

```bash
sudo rm /etc/apt/sources.list.d/napilab.list /usr/share/keyrings/napilab.gpg
sudo apt update
```
---

## Пакеты

### mbusd
Шлюз Modbus TCP → RTU. Позволяет подключить устройства с RS-232/485 к сети через TCP/IP.\
[github.com/3cky/mbusd](https://github.com/3cky/mbusd)

### mbscan
Быстрый сканер Modbus RTU шины. Находит все устройства на шине. Без зависимостей.\
[github.com/lab240/mbscan](https://github.com/lab240/mbscan)

### modbus-slave
Эмулятор Modbus RTU slave. До 30 устройств в одном процессе. Удобен для тестирования без реального железа.\
[github.com/lab240/modbus-slave](https://github.com/lab240/modbus-slave)

### modlink
Опрашивает Modbus TCP устройства и раздаёт данные через RTU serial интерфейс. Написан на Go.\
[github.com/napilab/modlink](https://github.com/napilab/modlink)

### mbus-gw-t2r
Многопоточный шлюз Modbus TCP → multi Modbus RTU. Шлюз Modbus TCP - мульти Modbus RTU RS-485 (множество RS485/RS232 портов).\
[github.com/napilab/mbus-gw-t2r](https://github.com/napilab/mbus-gw-t2r)

---
