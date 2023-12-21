---
sidebar_position: 11
---

# Демокит#1 "Компакт"

![](img-compact/demobox1.jpg)
## Состав 

- Сборщик-компакт с ARMbian 1шт
- MicroSD карта 32Гб c NapiLinux 1шт
- USB флешка с готовыми образами Armbian и NapiLinux 1шт
- Консоль USB-UART 1шт
- Кабель USB-A - USB type-c 1шт
- POE Passive преобразователь

## Начало работы (при наличии сети)

1. Подсоединить Ethernet кабель
   
2. Подсоединить питание к Сборщику (постоянное напряжение 9-36В) или подсоединить питание к преобразователю POE.
   
3. Убедиться, что светодиод "питание" горит зеленым

4. Загрузка Сборщика пойдет автоматически.
   
5. Если в сети есть DHCP сервер, то сборщик запросит и получит IP-настройки с сервера. Какие настройки он получил можно посмотреть на сервере (роутере). Далее можно зайти на сборщик по ssh (`ssh root@<ip>`). Пароль: napilinux.


## Ссылки и инструкции

1. NapiLinux - http://napilinux.ru
   
2. Все о Сборщик Компакт на одной странице: https://napiworld.ru/docs/frontcontrol-compact
   
3. Все о модуле Napi C: https://napiworld.ru/docs/napi-intro
   
4. Сборка NapiLinux из исходников: https://napilinux.ru/docs/biuld-base
   
5. Видео снятия крышки и установки SD: https://youtube.com/shorts/Lm_XV_x1xTE?feature=share
   
6. Интерфейс NapiConfig: https://napilinux.ru/napiConfig