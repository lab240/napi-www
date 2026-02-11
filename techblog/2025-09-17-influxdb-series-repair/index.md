---
slug: influxdb-series-repair
title: Восстановление повреждённых series в InfluxDB
authors: dmn
tags: [influxdb, repair, debugging, series, tsi]
telegram_id: 19
---

Неожиданно InfluxDB может перестать запускаться с ошибкой "invalid series segment". Рассмотрим экстренный способ восстановления поврежденных series файлов.

## Симптомы проблемы

InfluxDB не запускается и выдает ошибку:

```bash
root@napi-playfulokapi:~# /usr/lib/influxdb/scripts/influxd-systemd-start.sh
```

```log
2025-09-16T08:54:29.621708Z     info    Welcome to InfluxDB     {"log_id": "0z0RZky0000", "version": "v2.7.1"}
2025-09-16T08:54:29.677535Z     info    Resources opened        {"service": "bolt", "path": "/root/.influxdbv2/influxd.bolt"}
2025-09-16T08:54:29.680849Z     info    Resources opened        {"service": "sqlite", "path": "/root/.influxdbv2/influxd.sqlite"}
2025-09-16T08:54:29.780689Z     error   Unable to open series file      {"path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": 0, "error": "invalid series segment"}
2025-09-16T08:54:29.781345Z     error   Failed to open engine   {"error": "invalid series segment"}
Error: invalid series segment
```

## Диагностика

### 1. Проверка состояния series файлов

```bash
influxd inspect verify-seriesfile
```

Ошибочный вывод:
```log
2025-09-16T09:00:55.486187Z  error   Error opening segment   {"path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": "01", "segment": "0000", "error": "invalid series segment"}
2025-09-16T09:00:55.497022Z  error   Error opening segment   {"path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": "00", "segment": "0000", "error": "invalid series segment"}  
2025-09-16T09:00:55.507980Z  error   Error opening segment   {"path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": "02", "segment": "0000", "error": "invalid series segment"}
```

## Экстренное восстановление

### 1. Остановка InfluxDB

```bash
systemctl stop influxdb
```

### 2. Резервное копирование повреждённых files

```bash
# Переименовываем поврежденную папку series
mv /root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series/ \
   /root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series.bad/
```

### 3. Перестроение series индекса

```bash
influxd inspect build-tsi
```

### 4. Запуск InfluxDB

```bash
systemctl start influxdb
```

### 5. Проверка работоспособности

```bash
systemctl status influxdb
journalctl -u influxdb -f
```

## Альтернативные методы

### Проверка целостности всех данных:

```bash
# Проверка TSI индексов
influxd inspect verify-tsi

# Проверка WAL файлов  
influxd inspect verify-wal

# Общая проверка данных
influxd inspect dump-tsi
```

### Просмотр информации о buckets:

```bash
influx bucket list
```

## Предупреждения

⚠️ **Важно:**
- Этот метод может привести к потере некоторых метаданных series
- Рекомендуется предварительно создать полную резервную копию
- Данные измерений обычно остаются целыми, но могут потеряться некоторые series метаданные

⚠️ **Альтернатива:**
- Восстановление из резервной копии
- Миграция данных в новую базу InfluxDB

## Профилактика

### Регулярные резервные копии:
```bash
# Экспорт данных
influx backup /path/to/backup/

# Мониторинг здоровья БД
influxd inspect verify-seriesfile --verbose
```

Данный способ является экстренным и помог восстановить работоспособность InfluxDB, когда обычная очистка базы не помогала.