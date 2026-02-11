---
slug: zigbee2mqtt-napi
title: Установка Zigbee2mqtt на NAPI-C (P)
authors: dmn
tags: [zigbee2mqtt, napi, armbian, nodejs, mosquitto, systemd]
telegram_id: 15
---

## Устанавливаем на NAPI-C (P)  Zigbee2mqtt

1. Устанавливаем Аrmbian

2. Ставим пакеты

```bash
apt-get install -y curl curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - apt-get install -y nodejs git make g++ gcc libsystemd-dev tmux apt install -y mosquitto mosquitto-clients corepack enable
```

3. Создадим каталог

```bash
mkdir /opt/zigbee2mqtt
```

4. На случай если ставили не от рута нужно дать права на каталог

```bash
sudo chown -R ${USER}: /opt/zigbee2mqtt
```

5. Скачиваем гит в каталог

```bash
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
```

6. Переходим в каталог:

```bash
cd /opt/zigbee2mqtt
```

7. Запустим tmux и продолжим сборку в нем:

```bash
tmux
```

8. Собираем приложение

Запустим сборку в один поток

```bash
pnpm install --frozen-lockfile --child-concurrency=1 6.1
```

9. После сборки выполняем запуск

```bash
cd /opt/zigbee2mqtt
pnpm start
```

10. Делаем сервис

Создаем файл

```bash
nano /etc/systemd/system/zigbee2mqtt.service
```

С таким содержимым

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

11. Выполняем инициализацию и запуск сервиса

```bash
systemctl daemon-reload
systemctl enable zigbee2mqtt.service
systemctl start zigbee2mqtt.service
systemctl status zigbee2mqtt.service
journalctl -u zigbee2mqtt.service -f
```
#napi #zigbee $zigbee2mqtt
