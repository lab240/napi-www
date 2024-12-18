---
sidebar_position: 71
---

# Прошивка через кабель (Windows Host)

Прошивка образа в NAPI из Windows.

:boom: Мы рекомендуем пользоваться Linux, но из среды Windows возможно полноценно работать в NAPI.

## Драйверы для работы

Необходимо скачать и установить драйверы для ОС Windows


RKDevTool on Windows : https://wiki.radxa.com/Rock5/install/rockchip-flash-tools.

(Прямая ссылка https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96-20221121.rar)

RK Driver Assistant: https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip

## Loader и прошивки для устройств NAPI

Необходимо скачать корректный для вашего устройства лоадер и прошивку. Для этого надо знать ревизию процессора (rk3308A или rk3308b).

 - Бутлоадер для NaPi: https://dl.radxa.com/rockpis/images/loader/

Выбор прошивки также зависит от ревизии процессора и от типа устройства, которое вы хотите прошить (процессорный модуль \ сборщик \ токо сборщик).

- Прошивки для всех устройств на основе NaPi (Napilinux): https://download.napilinux.ru/linuximg/

## ШАГ 1. Установка драйвера rockusb

- Распаковываем архив DriverAssitant_v5.0.zip
- В папке с распакованными файлами запускаем DriverInstall.exe
- В появившемся окне нажимаем кнопку Install Driver и ждем сообщения «Install driver ok.»

![Napi win install](img-w/w1.png)

Может появиться запрос от защиты системы Windows доверять ли данному драйверу. С запросом нужно согласиться.

![Napi win install](img-w/w2.png)

## ШАГ 2. Загрузка платы в режиме Maskrom

- С помощью кабеля USB Type-C подключаем устройство к ПК в слот USB-A;
- Нажимаем и удерживаем клавишу Maskrom, затем коротко нажимаем клавишу Reset не отпуская Maskrom, через несколько секунд отпускаем Maskrom;

```text
При успешной установке драйверов и правильном подключении в диспетчере устройств должно появиться устройство Rockusb Device в классе устройств Class for rockusb devices.
```
![Napi win install](img-w/w3.png)

## Шаг 4. Прошивка bootloader

- Распаковываем архив с программой RKDevTool
- Запускаем RKDevTool.exe
```text
Если предыдущие шаги были выполнены верно и Napi подключен к ПК, мы увидим сообщение в нижней части программы: Found One MASKROM Device;
```
![Napi win install](img-w/w4.png)

- В окне программы переходим во вкладку Advanced Function;
Нажимаем на кнопку «...» в строке Boot:
В появившемся окне указываем путь к нужному файлу bootloader’а, нажимаем кнопку «Открыть»;

![Napi win install](img-w/w7.png)

Следом нажимаем кнопку «Download», если выбран правильный файл и переход Napi в режим загрузки прошел успешно, то в правой части окна программы отобразится сообщение Download Boot Success;

![Napi win install](img-w/w8.png)

:boom: Поздравляем, вы "прошили" bootloader, осталось совсем немного - прошить прошивку.

## Шаг 5. Прошивка образа системы (NapiLinux)

- Возвращаемся во вкладку Download Image;
Убираем(!) чекбокс в первой строке с именем Loader (так как мы уже произвели загрузку bootloader’а в ручном режиме, это исключает ошибки, иногда возникающие в режиме автоматической загрузки);

![Napi win install](img-w/w9.png)

- Во второй строке с именем sys нажимаем левой кнопкой мыши в области с именем «...», в появившемся окне выбираем нужный образ системы.

![Napi win install](img-w/w10.png)

- Нажимаем кнопку Run. Процесс загрузки образа будет отображаться в правой части программы.

![Napi win install](img-w/w11.png)

При у спешной загрузке отобразиться сообщение Download image OK.
После данного сообщения плату можно перезагрузить и использовать в обычной режиме.

:boom: Поздравляем, вы успешно прошили NaPi

## Если что-то пошло не так

:boom: Если процесс загрузки завершился с ошибкой, можно попробовать повторно нажать кнопку Run.

:boom: Если во время прошивки произошел разрыв соединения по USB, то шаги нужно повторить с момента подключения платы в режиме Maskrom и загрузки bootloader’а.

## Ссылки

Драйверы и программы для загрузки: https://wiki.radxa.com/Rock5/install/rockchip-flash-tools

Прошивки для NaPi (Napilinux): https://download.napilinux.ru/linuximg/napilinux/napilinux-napi-devs-rk3308bs/front-control/

Прошивка для Napi (Armbian): https://download.napilinux.ru/linuximg/armbian/

Бутлоадер для NaPi: https://dl.radxa.com/rockpis/images/loader/

[Описание и прошивка для Linux](install_lin)

[Прошивка без кабеля](flash_to_nand)
