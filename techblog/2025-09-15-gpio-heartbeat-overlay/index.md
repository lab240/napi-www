---
slug: gpio-heartbeat-overlay
title: Перенос heartbeat диода на пользовательский GPIO через overlay
authors: dmn
tags: [gpio, heartbeat, overlay, armbian, dts]
telegram_id: 18
---

Руководство по переносу индикатора активности (heartbeat LED) с встроенного GPIO на свободный пин с помощью пользовательского overlay в Armbian.

## Задача

По умолчанию heartbeat диод находится на **GPIO0A5**, которого нет на "гребёнке" NAPI. Необходимо перенести его на **GPIO3B3**, который доступен на разъеме и не занят.

## Создание пользовательского overlay

### 1. Создание файла DTS

Создаем файл `blue-led-gpio3b3-2.dts`:

```dts
/dts-v1/;
/plugin/;

/ {
    fragment@0 {
        /* Целевой узел для LED */
        target-path = "/leds/blue-led";
        __overlay__ {
            gpios = <&gpio3 27 0>;          /* GPIO3_B3, ACTIVE_HIGH */
            linux,default-trigger = "heartbeat";
            default-state = "on";
            status = "okay";
        };
    };
};
```

### 2. Добавление overlay в систему

Используем встроенную команду Armbian:

```bash
armbian-add-overlay blue-led-gpio3b3-2.dts
```

**Что делает эта команда:**
- Автоматически компилирует `.dts` в `.dtbo`
- Перемещает файл в нужную папку
- Добавляет запись в `armbianEnv.txt`

### 3. Применение изменений

```bash
reboot
```

## Проверка результата

После перезагрузки:

1. **Визуальная проверка** - диод должен начать мигать на новом пине
2. **Проверка активного GPIO**:

```bash
# Найти активный LED
find /sys/class/leds -name "*blue*" -o -name "*heartbeat*"

# Посмотреть какой GPIO используется
cat /sys/class/leds/*/device/modalias
```

## Расчет номера GPIO

Для **GPIO3B3**:
- Банк: **3**
- Группа: **B** (8-15)
- Пин: **3**
- Итого: **8 + 3 = 11** (но в DTS указываем **27** = 3*8 + 3)

## Альтернативный способ - ручное редактирование

### Проверка текущей конфигурации:
```bash
cat /boot/armbianEnv.txt | grep overlay
```

### Ручное добавление:
```bash
echo "user_overlays=blue-led-gpio3b3-2" >> /boot/armbianEnv.txt
```

## Отладка проблем

### Проверка загрузки overlay:
```bash
dmesg | grep overlay
dmesg | grep gpio
```

### Проверка доступных LED:
```bash
ls -la /sys/class/leds/
```

### Проверка триггеров:
```bash
cat /sys/class/leds/*/trigger
```

## Важные замечания

- **GPIO3B3** может пересекаться с **SPI1-CLK** - проверьте конфликты
- Overlay применяется только после перезагрузки
- Для отмены изменений удалите строку из `armbianEnv.txt` и перезагрузитесь

Этот метод позволяет легко переназначать системные индикаторы на удобные пины без пересборки ядра.