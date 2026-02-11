---
slug: zigbee2mqtt-napi
title: Установка Zigbee2mqtt на NAPI-C (P)
authors: dmn
tags: [zigbee2mqtt, napi, armbian, nodejs, mosquitto, systemd]
telegram_id: 15
---

Полное руководство по установке Zigbee2mqtt на устройства NAPI-C и NAPI-P с операционной системой Armbian.

## 1. Установка Armbian

Начните с установки операционной системы Armbian на устройство.

## 2. Установка необходимых пакетов

```bash
# Основные инструменты
apt-get install -y curl

# Установка Node.js LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
apt-get install -y nodejs git make g++ gcc libsystemd-dev tmux

# Установка Mosquitto MQTT брокера
apt install -y mosquitto mosquitto-clients

# Включение corepack для pnpm
corepack enable
```

## 3. Создание каталога

```bash
mkdir /opt/zigbee2mqtt
```

## 4. Настройка прав доступа

На случай если установка происходит не от root:

```bash
sudo chown -R ${USER}: /opt/zigbee2mqtt
```

## 5. Скачивание исходного кода

```bash
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
```

## 6. Переход в рабочий каталог

```bash
cd /opt/zigbee2mqtt
```

## 7. Сборка в tmux

Запустим tmux для продолжения сборки в отдельной сессии:

```bash
tmux
```

## 8. Сборка приложения

Запускаем сборку в один поток (важно для устройств с ограниченными ресурсами):

```bash
pnpm install --frozen-lockfile --child-concurrency=1
```

## 9. Первый запуск

После успешной сборки выполняем первый запуск:

```bash
cd /opt/zigbee2mqtt
pnpm start
```

## 10. Создание системного сервиса

Создаем файл сервиса:

```bash
nano /etc/systemd/system/zigbee2mqtt.service
```

С следующим содержимым:

```ini
[Unit]
Description=zigbee2mqtt
After=network.target

[Service]
Environment=NODE_ENV=production
Type=simple
ExecStart=/usr/bin/pnpm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

## 11. Активация и запуск сервиса

```bash
# Перезагрузка конфигурации systemd
systemctl daemon-reload

# Включение автозапуска
systemctl enable zigbee2mqtt.service

# Запуск сервиса
systemctl start zigbee2mqtt.service

# Проверка статуса
systemctl status zigbee2mqtt.service

# Просмотр логов
journalctl -u zigbee2mqtt.service -f
```

## Дополнительные настройки

### Конфигурация Zigbee2mqtt

Основной файл конфигурации находится в `/opt/zigbee2mqtt/data/configuration.yaml`. Отредактируйте его в соответствии с вашими потребностями.

### Проверка работы

```bash
# Статус всех связанных сервисов
systemctl status mosquitto zigbee2mqtt

# Мониторинг MQTT сообщений
mosquitto_sub -t "zigbee2mqtt/#" -v
```

## Особенности установки на NAPI

- Сборка выполняется в один поток из-за ограниченных ресурсов
- Рекомендуется использование tmux для длительной сборки
- После установки убедитесь в правильной настройке Zigbee адаптера в конфигурации

Данная установка обеспечивает стабильную работу Zigbee2mqtt на устройствах NAPI с автоматическим запуском при загрузке системы.