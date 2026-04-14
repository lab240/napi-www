---
slug: extract-running-dts
title: Получение текущего DTS из загруженной системы
authors: dmn
tags: [dts, dtb, kernel, devicetree, overlay]
telegram_id: 27
description: "Получение и декомпиляция текущего Device Tree Source из работающей Linux системы через dtc."
keywords: [dts, dtb, device tree, kernel, overlay, linux, dtc, декомпиляция]
---

Получить текущий dts из dtb, с которой загрузилась система:

```
dtc -I fs -O dts /sys/firmware/devicetree/base > /tmp/running.dts
```

Это ключевой файл, отображающий как система "понимает" всю перефирию и интерфейсы.

Внимательно изучайте файл `running.dts` через текстовый редактор - он ключ к пониманию как система интерпретирует интерфейсы.

И, кстати, этот dts можно "скормить" в ChatGPT и задавать вопросы или сформировать просьбу сделать overlay.

#kernel #dts
