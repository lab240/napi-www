---
slug: telegraf-mqtt-testing
title: Тестирование MQTT датчиков через Telegraf
authors: dmn
tags: [telegraf, mqtt, testing, sensors, debug]
telegram_id: 5
---

Для тестирования датчиков mqtt не подходит вывод нашего теста через Веб, так как данные приходят не сразу. Поэтому можем тестировать вручную. 

Для того, чтобы было видно какие данные увидел телеграф, перенаправим вывод на экран. 

Делаем файл `telegtraf.conf.out` в любом месте, но не в `/etc/telegraf/telegraf.d` (чтобы телеграф его по умолчанию не подхватывал)

```toml
[[outputs.file]]
  files = ["stdout"]
  data_format = "influx"
```

И тестируем командой 

```bash
telegraf --config /etc/telegraf/telegraf.d/cl-203.conf --config /root/telegraf.conf.out --debug
```

Смотрим на экране данные

```
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/CO CO=0 1751463487564614267
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/CO2 CO2=410 1751463487605135529
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/PM25 PM25=248 1751463487605167843
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/RH RH=47.6 1751463487605195050
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/TC TC=24 1751463487605267960
CL213E,host=napi-fearlessporcupine,sensor=CL213E,topic=sensors/CL213E/DC DC=12.2 1751463487605276033
```
#telegraf #mqtt #napilinux