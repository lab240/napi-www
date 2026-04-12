---
sidebar_position: 1
---

# Книга знаний NAPI (NAPI Handbook)

> **Практические инструкции по работе с устройствами NAPI: подключение, настройка, работа с датчиками и протоколами. Здесь собраны самые актуальные статьи. Полная техническая база - технические заметки, решения задач и короткие приемы - в [Ленте знаний](/recipes/).**

## Доступ через консоль

- [Доступ к устройствам NAPI через консоль](/software/console/) - подключение через последовательную консоль, когда сеть недоступна

## Прошивка и бекап

- [Прошивка в NAND без кабеля](/software/flash-backup/flash_to_nand) - запись образа через USB-флешку
- [Бекап прошивки из NAND в файл](/software/flash-backup/backaup_nand) - создание резервной копии
- [Прошивка через кабель (Windows)](/software/flash-backup/install_win) - прошивка с хоста Windows
- [Прошивка через кабель (Linux)](/software/flash-backup/install_lin) - прошивка с хоста Linux

## Modbus / SNMP / GPIO

Работа с датчиками и протоколами промышленной автоматизации.

- [Опрос датчика по Modbus RTU через RS485](/software/sensors/modbus-rtu/) - чтение датчиков через последовательный порт
- [Опрос датчика по Modbus TCP](/software/sensors/modbus-tcp/) - чтение датчиков по сети
- [Шлюз Modbus RTU - Modbus TCP](/software/sensors/mgate/) - превращение RS485-датчиков в сетевые
- [Сбор данных c Modbus-датчиков через Telegraf](/software/sensors/telegraf-modbus/) - автоматический опрос и запись в базу данных
- [Настройка сервиса SNMP на NAPI](/software/sensors/snmp-fcc/) - мониторинг устройства по SNMP
- [Установка и настройка Grafana](/software/sensors/grafana-install/) - визуализация данных
- [Установка gpiod и работа с GPIO](/software/gpio/gpiod/) - управление цифровыми портами


## Сети и IP

Первые шаги после подключения устройства к сети.

- [Как найти NAPI по IP](/software/notes/findip/) - поиск IP-адреса устройства в сети
- [Как настроить статический IP через NapiConfig](/software/notes/staticip/) - назначение фиксированного адреса

## Лаборатория DYI

Учебные проекты и практические руководства.

- [Запуск и проверка NapiSci](/software/learn/napisci-first-start/) - первый запуск учебной платы NapiSci
- [Плата на NAPI-C своими руками. Часть 1. Прототип](/software/learn/napi-diy-part1/) - разработка собственной платы расширения
- [Плата на NAPI-C своими руками. Часть 2. Софт](/software/learn/napi-diy-part2/) - работа с UART, I2C, SPI, GPIO из Linux
- [Стенд эмуляции датчиков Modbus](/software/learn/mbusstand/) - стенд на 30 виртуальных датчиков для тестирования
- [Несколько коротких приемов](/software/learn/short-recepie-collection/) - полезные трюки для работы с Linux на NAPI
