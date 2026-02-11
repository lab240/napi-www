---
slug: influxdb-series-repair
title: Восстановление повреждённых series в InfluxDB
authors: dmn
tags: [influxdb, repair, debugging, series, tsi]
telegram_id: 19
---

## Как "починить" сломанные series в InfluxDB

Неожиданно при отладке датчиков influxdb перестал запускаться с такой ошибкой.

### Ошибка запуска

```
root@napi-playfulokapi:~# /usr/lib/influxdb/scripts/influxd-systemd-start.sh
Command "print-config" is deprecated, use the influx-cli command server-config to display the configuration values from the running server
2025-09-16T08:54:29.621708Z     info    Welcome to InfluxDB     {"log_id": "0z0RZky0000", "version": "v2.7.1", "commit": "407fa622e9", "build_date": "2023-04-28T13:24:42Z", "log_level": "info"}
2025-09-16T08:54:29.677535Z     info    Resources opened        {"log_id": "0z0RZky0000", "service": "bolt", "path": "/root/.influxdbv2/influxd.bolt"}
2025-09-16T08:54:29.680849Z     info    Resources opened        {"log_id": "0z0RZky0000", "service": "sqlite", "path": "/root/.influxdbv2/influxd.sqlite"}
2025-09-16T08:54:29.754889Z     info    Checking InfluxDB metadata for prior version.   {"log_id": "0z0RZky0000", "bolt_path": "/root/.influxdbv2/influxd.bolt"}
2025-09-16T08:54:29.756722Z     info    Using data dir  {"log_id": "0z0RZky0000", "service": "storage-engine", "service": "store", "path": "/root/.influxdbv2/engine/data"}
2025-09-16T08:54:29.773043Z     info    Compaction settings     {"log_id": "0z0RZky0000", "service": "storage-engine", "service": "store", "max_concurrent_compactions": 2, "throughput_bytes_per_second": 50331648, "throughput_bytes_per_second_burst": 50331648}
2025-09-16T08:54:29.774155Z     info    Open store (start)      {"log_id": "0z0RZky0000", "service": "storage-engine", "service": "store", "op_name": "tsdb_open", "op_event": "start"}
2025-09-16T08:54:29.780689Z     error   Unable to open series file      {"log_id": "0z0RZky0000", "service": "storage-engine", "path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": 0, "error": "invalid series segment"}
2025-09-16T08:54:29.781180Z     info    Open store (end)        {"log_id": "0z0RZky0000", "service": "storage-engine", "service": "store", "op_name": "tsdb_open", "op_event": "end", "op_elapsed": "7.046ms"}
2025-09-16T08:54:29.781345Z     error   Failed to open engine   {"log_id": "0z0RZky0000", "error": "invalid series segment"}
Error: invalid series segment
```

Как видно в логе - у нас сломался series. Очистка базы мне не помогла, поэтому чистил вручную.

### Проверить series
```bash
root@napi-playfulokapi:~# influxd inspect   verify-seriesfile
2025-09-16T09:00:55.486187Z  error   Error opening segment   {"log_id": "0z0RwJBW000", "path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": "01", "segment": "0000", "error": "invalid series segment"}
2025-09-16T09:00:55.497022Z  error   Error opening segment   {"log_id": "0z0RwJBW000", "path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": "00", "segment": "0000", "error": "invalid series segment"}
2025-09-16T09:00:55.507980Z  error   Error opening segment   {"log_id": "0z0RwJBW000", "path": "/root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series", "partition": "02", "segment": "0000", "error": "invalid series segment"}
```

Видим поломанный series. Удалим его и перестроим

### Удаление повреждённых series

```bash
mv /root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series/ /root/.influxdbv2/engine/data/50d1dfc5f00c762d/_series.bad/
```

### Перестроим series

```bash
influxd inspect build-tsi
```

### Результат

После этого "шаманства" у меня influx запустился корректно.

**PS.** Возможно это не самый удачный способ, но в записную книжку как срочный рецепт исправления я решил это записать.

#influxdb
