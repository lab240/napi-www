---
slug: can-interface-setup
title: Настройка и тестирование CAN интерфейса в Linux
authors: dmn
tags: [can, socketcan, can-utils, network, automotive]
telegram_id: 39
---

## Настройка CAN интерфейса

Поднимаем и проверяем CAN интерфейс.

Интересно, что CAN в Linux это сетевой интерфейс. На него нельзя повесить IP, но Linux управлять можно через ip link.

```bash
ip link set can0 down
ip link set can0 type can bitrate 500000 restart-ms 100
ip link set can0 up
```
## Проверка loopback

Проверяем loop (Аналог ping localhost).

Ставим пакет:
```bash
apt install can-utils
```

## Тестирование

В одной сессии слушаем can0:
```bash
root@napi2:~# candump -L can0
```

В другой на этот же интерфейс шлем посылку:
```bash
cansend can0 123#11223344
```

Должны получить ответ в сессии, где слушали:
```
(1769774861.028890) can0 123#11223344
```

#can #napi2
