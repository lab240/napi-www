---
slug: telegraf-mqtt-testing
title: Тестирование MQTT датчиков через Telegraf
authors: dmn
tags: [telegraf, mqtt, testing, sensors, debug]
telegram_id: 5
---

Для тестирования датчиков MQTT не подходит вывод через веб-интерфейс, так как данные приходят не сразу. Поэтому лучше тестировать вручную через консоль.

## Настройка вывода на экран

Для того чтобы было видно, какие данные увидел Telegraf, перенаправим вывод на экран.

Создаем файл `telegraf.conf.out` в любом месте, но **НЕ** в `/etc/telegraf/telegraf.d` (чтобы Telegraf его по умолчанию не подхватывал):

```toml
[[outputs.file]]
  files = ["stdout"]
  data_format = "influx"
```

## Команда для тестирования

Тестируем командой:

```bash
telegraf --config /etc/telegraf/telegraf.d/cl-203.conf --config /root/telegraf.conf.out --debug
```

## Пример вывода данных

На экране будут видны данные в формате InfluxDB:

```
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/CO CO=0 1751463487564614267
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/CO2 CO2=410 1751463487605135529
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/PM25 PM25=248 1751463487605167843
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/RH RH=47.6 1751463487605195050
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/TC TC=24 1751463487605267960
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/DC DC=12.2 1751463487605276033
```

Этот метод позволяет в реальном времени видеть все данные, которые обрабатывает Telegraf, что очень удобно для отладки конфигурации и проверки корректности получаемых данных от MQTT датчиков.