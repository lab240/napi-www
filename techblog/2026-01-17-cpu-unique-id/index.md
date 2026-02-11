---
slug: cpu-unique-id
title: Получение уникального ID процессора Rockchip
authors: dmn
tags: [cpu-id, rockchip, otp, unique-identifier, security]
telegram_id: 36
---

Как получить уникальный ID процессора для идентификации конкретного экземпляра NAPI-C/NAPI-P/NAPI-S.

## Получение уникального ID

```bash
ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p)
echo -n "$ID" | sha256sum
```

## Разбор команды

### 1. Чтение OTP памяти:
```bash
dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null
```

- **if=** - источник данных (OTP память Rockchip)
- **bs=1** - размер блока 1 байт
- **skip=8** - пропустить первые 8 байт  
- **count=8** - прочитать 8 байт
- **2>/dev/null** - подавить вывод ошибок

### 2. Конвертация в hex:
```bash
xxd -p
```
Преобразует бинарные данные в шестнадцатеричную строку.

### 3. Хеширование:
```bash
echo -n "$ID" | sha256sum
```
Создает SHA256 хеш от полученного ID для дополнительной уникальности.

## Альтернативные способы

### Только сырой ID:
```bash
ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p)
echo "$ID"
```

### Более длинный ID:
```bash
# Использовать больше байт из OTP
ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=16 2>/dev/null | xxd -p)
echo "$ID"
```

### Комбинированный подход:
```bash
# CPU ID + MAC адрес для дополнительной уникальности
CPU_ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p)
MAC=$(cat /sys/class/net/eth0/address | tr -d :)
echo -n "${CPU_ID}${MAC}" | sha256sum
```

## Практическое использование

### Скрипт получения ID устройства:
```bash
#!/bin/bash
# get_device_id.sh

get_cpu_id() {
    local cpu_id=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p)
    if [ -z "$cpu_id" ]; then
        echo "ERROR: Cannot read CPU ID" >&2
        return 1
    fi
    echo "$cpu_id"
}

get_device_hash() {
    local cpu_id=$(get_cpu_id)
    if [ $? -eq 0 ]; then
        echo -n "$cpu_id" | sha256sum | cut -d' ' -f1
    fi
}

# Использование
echo "Raw CPU ID: $(get_cpu_id)"
echo "Device Hash: $(get_device_hash)"
```

## Применения

### 1. Лицензирование ПО:
```bash
# Привязка лицензии к устройству
DEVICE_ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p)
LICENSE_CHECK="software_license_${DEVICE_ID}"
```

### 2. Конфигурация по умолчанию:
```bash
# Уникальное имя хоста
DEVICE_ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p | cut -c1-8)
hostnamectl set-hostname "napi-${DEVICE_ID}"
```

### 3. Криптографические ключи:
```bash
# Генерация ключей на основе hardware ID
DEVICE_ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p)
openssl dgst -sha256 -hmac "$DEVICE_ID" -binary /dev/urandom | head -c32 > device_key.bin
```

## Проверка доступности

### Проверка наличия OTP:
```bash
if [ -e /sys/bus/nvmem/devices/rockchip-otp0/nvmem ]; then
    echo "OTP доступен"
else
    echo "OTP недоступен"
fi
```

### Права доступа:
```bash
# Обычно требуются root права
sudo ls -la /sys/bus/nvmem/devices/rockchip-otp0/nvmem
```

## Совместимость

Данный метод работает на:
- ✅ NAPI-C (RK3308)  
- ✅ NAPI-P (RK3308)
- ✅ NAPI-S (RK3308)
- ✅ Другие устройства на базе Rockchip с OTP

Для других процессоров путь к OTP может отличаться.

Этот уникальный ID остается постоянным на протяжении всего срока службы устройства и может использоваться для различных задач идентификации и безопасности.