---
slug: dmn-elemy
title: Сборщик - логгер данных с устройств ELEMY
authors: dmn
tags: [napiworld, elemy]
---

# Сборщик-компакт - логгер (самописец) данных с устройств ELEMY

Отличительной особенностью сборщика и всех его модификаций является возможность опроса любых modbus датчиков,  хранение в базе данных прямо на устройстве и выдача данных в удобной форме через интерфейс Grafana.

![Alt text](img/elemy2.png)

Одним из применений является режим работы в режиме "самописец" - когда мы собираем и "складываем" данные на сборщике. Это полезная функция для анализа работы приборов, поиска и предупреждения поломок.

![Alt text](img/frontcontrol1.png)

<!--truncate-->

В рамках сотрудничества с компанией [Elemy](http://elemy.ru) мы установили Сборщик для сбора статистики работы приборов управления питанием (PDU) для ИТ сферы. Так как все устройства передают свои состояния по протоколу modbus tcp, то интеграция Сборщика свелась к написанию конфигурационного файла telegraf (описание регистров) и настройки dashboards в Grafana.

![Alt text](img/napiconfig.png)

## Устройства для логгера (самописца)

### ATS-1204

![Alt text](img/1204-dev.png)

Дашбоард ATS-1204

:::tip

Пользователь может сам менять вид Дашборды, а также выбирать произвольные временные отрезки для анализа.
:::

![Alt text](img/1204-g.png)

### CCU-1001


![Alt text](img/ccu-1001-dev.png)

Дашборды для CCU-1001

![Alt text](img/ccu-1001-dev-1.png)

![Alt text](img/ccu-1001-g.png)

:::tip

Вам не обязательно хранить данные в облаке, сборщик может хранить данные на себе больше года.

:::

### iPDU-1502

![Alt text](img/1502-dev.png)

Дашборард iPDU-1502

![Alt text](img/1502-dev--1.png)

:::tip

В процессе подготовки опроса устройств нам не понадобилось работать в командной строке. Конфигурации регистров modbus для датчиков загружаются через NapiConfig, настройка dashboard настраивается через веб-инструменты Grafana.

:::

## Работа в Grafana

Пользователь может не только просматривать графики, но и 
менять параметры, временные рамки, очередность графиков.

![](img/grf1.gif)

## Мобильный интерфейс

Интерфейс Grafana прекрасно оптимизирован под разрешения
смартфонов и обладает полноценным функционалом.

![Alt text](img/mobile1.png)


## Сcылки

- [Подробнее про Сборщик-компакт](/docs/computers/frontcontrol-compact)
- [Оборудование Elemy](http://www.elemy.ru)