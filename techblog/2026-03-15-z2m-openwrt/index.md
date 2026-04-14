---
slug: z2m-openwrt
title: Сборка и запуск Zigbee2mqtt для OpenWRT
authors: dmn
tags: [openwrt, napi, napi-c, napi-p, napi-slot, linux, embedded]
description: "Сборка Zigbee2MQTT под musl/aarch64 с Docker и запуск на OpenWrt для NapiLab NAPI-C/P/Slot (RK3308)."
keywords: [zigbee2mqtt, openwrt, napi-c, aarch64, musl, docker, zigbee, rk3308]
---

# Zigbee2MQTT на OpenWrt / NapiLab Napi (RK3308)

> Инструкция по сборке Zigbee2MQTT под musl/aarch64 на хост-машине с Docker и запуску на OpenWrt.

---

## Почему это нетривиально

OpenWrt использует **musl libc** вместо стандартного glibc. Это означает:

- Официальные бинарники Node.js с nodejs.org (glibc) не запустятся
- Пакет `node` в фидах OpenWrt — только host-инструмент для сборки (`PKG_HOST_ONLY=1`), в прошивку не попадает
- Entware для aarch64 не содержит Node.js
- Нативные модули (`@serialport/bindings-cpp`) нужно компилировать под musl

Решение: собирать всё в Docker-контейнере на базе Alpine Linux (тоже использует musl).

---

## Требования

### Железо

Проверено на NAPI-C (rk3308\512Мб\4Гб Nand) c прошивкой OpenWRT (NapiWRT).
Репозиторий: https://github.com/lab240/napi-openwrt-build/


### Программное обеспечение на хост-машине

- Docker
- Git

## Шаг 1: Подготовка носителя

OpenWrt по умолчанию создаёт rootfs раздел ~104 МБ. Для Zigbee2MQTT нужно минимум 500 МБ свободного места.

В нашей сборке NapiWRT это решено автоматически через два `uci-defaults` скрипта которые при первой загрузке расширяют rootfs до конца носителя:

**`files/etc/uci-defaults/70-rootpt-resize`** — расширяет раздел и перезагружается:
```sh
if [ ! -e /etc/rootpt-resize ] \
&& type parted > /dev/null \
&& lock -n /var/lock/root-resize
then
ROOT_BLK="$(readlink -f /sys/dev/block/"$(awk -e \
'$9=="/dev/root"{print $3}' /proc/self/mountinfo)")"
ROOT_DISK="/dev/$(basename "${ROOT_BLK%/*}")"
ROOT_PART="${ROOT_BLK##*[^0-9]}"
echo "70-rootpt-resize: expanding ${ROOT_DISK} partition ${ROOT_PART} to 100%..."
parted -f -s "${ROOT_DISK}" resizepart "${ROOT_PART}" 100%
echo "70-rootpt-resize: done, rebooting..."
mount_root done
touch /etc/rootpt-resize
reboot
fi
exit 1
```

**`files/etc/uci-defaults/80-rootfs-resize`** — расширяет файловую систему через losetup и перезагружается:
```sh
if [ ! -e /etc/rootfs-resize ] \
&& [ -e /etc/rootpt-resize ] \
&& type losetup > /dev/null \
&& type resize2fs > /dev/null \
&& lock -n /var/lock/root-resize
then
ROOT_BLK="$(readlink -f /sys/dev/block/"$(awk -e \
'$9=="/dev/root"{print $3}' /proc/self/mountinfo)")"
ROOT_DEV="/dev/${ROOT_BLK##*/}"
echo "80-rootfs-resize: resizing filesystem on ${ROOT_DEV}..."
LOOP_DEV="$(losetup -f)"
losetup "${LOOP_DEV}" "${ROOT_DEV}"
resize2fs -f "${LOOP_DEV}"
losetup -d "${LOOP_DEV}"
echo "80-rootfs-resize: done, rebooting..."
mount_root done
touch /etc/rootfs-resize
reboot
fi
exit 1
```

Необходимые пакеты в `.config` сборки:
```
CONFIG_PACKAGE_parted=y
CONFIG_PACKAGE_losetup=y
CONFIG_PACKAGE_resize2fs=y
```

---

## Шаг 2: Установка Node.js на устройство

Node.js для musl/aarch64 предоставляет проект unofficial-builds от nodejs.org.

```bash
# На устройстве
cd /tmp
wget https://unofficial-builds.nodejs.org/download/release/v22.22.0/node-v22.22.0-linux-arm64-musl.tar.gz
mkdir -p /opt/node
tar xzf node-v22.22.0-linux-arm64-musl.tar.gz -C /opt/node --strip-components=1
rm node-v22.22.0-linux-arm64-musl.tar.gz

# Добавляем в PATH
export PATH=/opt/node/bin:$PATH

# Проверяем
node --version   # v22.22.0
npm --version    # 10.9.4
```

> Официальный бинарник с nodejs.org (linux-arm64 без суффикса musl) не запустится — он скомпилирован под glibc.

---
## Готовый архив

Если вы не хотите собирать самостоятельно — готовый архив Zigbee2MQTT для musl/aarch64 доступен в релизах репозитория:

👉 **[https://github.com/lab240/napi-openwrt-build/releases](https://github.com/lab240/napi-openwrt-build/releases)**

Скачайте файл `zigbee2mqtt-2.9.1-openwrt-aarch64-musl.tar.gz` и перейдите сразу к [Шагу 4](#шаг-4-копирование-на-устройство).

---

## Шаг 3: Сборка Zigbee2MQTT на хост-машине

Zigbee2MQTT содержит нативные модули (`@serialport/bindings-cpp`) которые нужно компилировать под целевую платформу. Делаем это в Docker с Alpine (musl) под arm64.

### На хост-машине

```bash
# Клонируем репозиторий
git clone --depth 1 https://github.com/Koenkk/zigbee2mqtt.git ~/zigbee2mqtt-arm

# Собираем в Docker под Alpine/arm64/musl
docker run --rm -v ~/zigbee2mqtt-arm:/app \
  --platform linux/arm64 \
  node:22-alpine \
  sh -c "apk add python3 make g++ linux-headers && \
         cd /app && \
         npm install && \
         npm rebuild @serialport/bindings-cpp --build-from-source && \
         npm run build && \
         tar czf /app/z2m.tar.gz --dereference -C /app ."
```

Ключевые флаги:
- `--platform linux/arm64` — целевая архитектура aarch64
- `node:22-alpine` — Alpine использует musl как OpenWrt, Node.js 22 соответствует требованиям Z2M
- `linux-headers` — нужны для компиляции `@serialport/bindings-cpp`
- `--build-from-source` — компилируем нативные модули вместо использования prebuilt glibc бинарников
- `--dereference` — разворачиваем симлинки в tar (иначе они сломаются при распаковке)

Время сборки: 3–5 минут.

---

## Шаг 4: Копирование на устройство

```bash
# С устройства (через scp)
scp dmn@<IP_ХОСТА>:~/zigbee2mqtt-arm/z2m.tar.gz /opt/

# Распаковываем
rm -rf /opt/zigbee2mqtt
mkdir /opt/zigbee2mqtt
tar xzf /opt/z2m.tar.gz -C /opt/zigbee2mqtt/
rm /opt/z2m.tar.gz
```

---

## Шаг 5: Зависимости на устройстве

Для работы нативных модулей нужна `libstdc++`:

```bash
apk update
apk add libstdcpp6
```

---

## Шаг 6: Запуск

```bash
export PATH=/opt/node/bin:$PATH
cd /opt/zigbee2mqtt
npm start
```

При успешном запуске:
```
Starting Zigbee2MQTT without watchdog.
Onboarding page is available at http://0.0.0.0:8080/
```

Откройте браузер: `http://<IP_устройства>:8080/` — онбординг страница для настройки координатора и MQTT.

---

## Конфигурация

После онбординга конфиг сохраняется в `/opt/zigbee2mqtt/data/configuration.yaml`:

```yaml
mqtt:
  server: mqtt://localhost   # Mosquitto уже установлен в базовой сборке Napi
serial:
  port: /dev/ttyUSB0        # Порт Zigbee-координатора
  adapter: ember             # или znp — зависит от координатора
```

---

## Автозапуск через procd

Создаём init-скрипт `/etc/init.d/zigbee2mqtt`:

```sh
#!/bin/sh /etc/rc.common

START=99
STOP=10
USE_PROCD=1

start_service() {
    procd_open_instance
    procd_set_param env PATH=/opt/node/bin:/usr/sbin:/usr/bin:/sbin:/bin
    procd_set_param command /opt/node/bin/node /opt/zigbee2mqtt/index.js
    procd_set_param dir /opt/zigbee2mqtt
    procd_set_param stdout 1
    procd_set_param stderr 1
    procd_set_param respawn
    procd_close_instance
}
```

```bash
chmod +x /etc/init.d/zigbee2mqtt
/etc/init.d/zigbee2mqtt enable
/etc/init.d/zigbee2mqtt start
```

---

## Итог: что получили

| Компонент | Версия | Источник |
|---|---|---|
| Node.js | 22.22.0 | unofficial-builds.nodejs.org (musl/arm64) |
| npm | 10.9.4 | в составе Node.js |
| Zigbee2MQTT | 2.9.x | собран в Docker/Alpine/arm64 |
| libstdc++ | из репозитория OpenWrt | apk |
| Mosquitto | из образа | встроен в сборку Napi |

---

## Известные ограничения

- Node.js не входит в стандартный образ — устанавливается вручную в `/opt`
- При обновлении прошивки `/opt` сохраняется (на отдельном разделе или eMMC)
- `udevadm` недоступен — автообнаружение адаптера не работает, порт указывается вручную в конфиге
