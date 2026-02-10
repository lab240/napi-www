---
slug: mosquitto-password-auth
title: Настройка аутентификации Mosquitto по паролю
authors: dmn
tags: [mqtt, mosquitto, auth, security]
---

Для запуска Mosquitto с проверкой пользователя и пароля нужно выполнить несколько простых шагов.

## Создание файла паролей

Создаем файл паролей с помощью утилиты `mosquitto_passwd`:

```bash
mosquitto_passwd -c /etc/mosquitto/passwd user
```

После выполнения команды система запросит пароль для пользователя `user`.

## Смена владельца файла

Меняем владельца файла на пользователя mosquitto:

```bash
chown mosquitto /etc/mosquitto/passwd
```

## Конфигурация Mosquitto

Простейший конфиг для включения аутентификации:

```conf
allow_anonymous false
password_file /etc/mosquitto/passwd
```

После применения этих настроек Mosquitto будет требовать авторизацию для всех подключений.