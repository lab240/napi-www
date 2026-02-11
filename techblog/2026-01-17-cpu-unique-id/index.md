---
slug: cpu-unique-id
title: Получение уникального ID процессора Rockchip
authors: dmn
tags: [cpu-id, rockchip, otp, unique-identifier, security]
telegram_id: 36
---

## Получение уникального ID процессора

Встал вопрос, как получить уникальный ID процессора для идентификации конкретного экземпляра `Napi-C/Napi-P/Napi-S`.

### Способ через OTP

Мы нашли такой способ:

```bash
ID=$(dd if=/sys/bus/nvmem/devices/rockchip-otp0/nvmem bs=1 skip=8 count=8 2>/dev/null | xxd -p)
echo -n "$ID" | sha256sum
```

### Описание команд

- `dd` - читает 8 байт из OTP памяти процессора Rockchip начиная с 8-го байта
- `xxd -p` - конвертирует двоичные данные в hex строку  
- `sha256sum` - создает SHA256 хеш для обеспечения уникальности
