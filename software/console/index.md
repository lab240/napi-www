---
sidebar_position: 21
---

# Доступ к NAPI и Сборщикам через консоль

Если сеть отсутствует или что-то пошло не так или Вам не вычислить IP, единственный способ посмотреть что происходит при загрузке - получить доступ через консоль. По сути это аналогично подключению монитора. 

:::tip

Также без консоли не обойтись, если  что-то нужно сделать до загрузки ОС в загрузчике u-boot. 

:::

## Общая информация

Итак как попасть в консоль и там работать. 

1. Понадобиться конвертер USB-UART
   
2. Необходимо соединить конвертор с GPIO отвечающими за консоль (они выведены отдельно и помечены)
   
3. Нам понадобиться софт программы терминала. К сожалению, они разные для Windows и Linux и если в Linux он есть в любой системе (minicom), то в Win нужно установить программу putty. 

4. Настроить программу терминала и присоединится
Если кратко, то нужно настроить параметры порта

- Armbian: 1500000\8n1
- NapiLinux: 115200\8n1

И отключить Flow Control (Аппаратное управление потоком).

В minicom после соединения нажать Control-A, далее Z, далее O, выбрать "Настройки последовательного порта" нажать F (параметр "Аппаратное управление потоком должно" быть "НЕТ") и проверить чтобы параметр "Программное управление потоком" тоже было "НЕТ".

В putty настройках Serial найти параметр "Flow Control" и установить в "None".

:::tip
Для продвинутых "консолеводов" этой информации достаточно, дальше можно не читать. Мы, однако, далее распишем как подключиться и настроить софт. 
:::

## Как подсоединить

### Находим выводы консоли на NAPI

![](img-%20console/napi-uart.jpg)

На сборщик-компакт эти выводы есть на плате 

![](img-%20console/frontcontrolcomact.jpg)


### Подключаем преобразователь UART-USB

Вам понадобиться преобразователь USB-UART. 

В комплекте с NAPI идет такой преобразователь. Хотя он похож на провод, преобразователь там есть. 

![](img-%20console/usb-uart1-cablejpg.jpg)


Также можно приобрести в любом магазине электроники. 

Один из проверенных вариантов

![](img-%20console/usb-uart1.jpg)

Для него надо иметь проводки (всего нужно 3 проводка), мы пользуемся такими 

![](img-%20console/dupons.jpg)

Так как у нас со стороны NAPI "штырьки", а со стороны преобразователя "кроватки", нам нужен именно такой вариант. 

Преобразователь UART-USB мы соединяем с USB компьютера \ ноутбука. Понадобиться стандартный проводок USB-A - USB-C, как для смартфона. 

### Как соединять проводки

:boom: ** Важно ! Проводки соединяются RX-TX, TX-RX, GND-GND и все ** ! :boom:

Если вы перепутаете последовательность ничего не сгорит, но работать не будет. Дело в том, что выход NAPI это вход преобразователя и, наоборот. Поэтому мы перекрещиваем проводки. 

:warning: Проводок VCC подсоединять не нужно !

## Консоль в Windows: putty

Сначала опишем как пользоваться софтом для Windows. 

### Определяем порт

Вставьте преобразователь в USB компьютер\нотубука. Теперь надо понять какой COM-порт система зарезервировала за преобразователем. Идем в диспетчер устройств в раздел  "COM-порты" и находим наш преобразователь и там номер порта.

![](img-%20console/win-1.jpg)

Запомним номер порта. В нашем случае это COM3 (у Вас может быть другой !).

### Ставим putty

Вам необходимо скачать и установать программку [putty] (www.putty.org). 

Арес для скачивания: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

### Настроим putty

После установки запустите Putty и сразу идем в раздел Serial

![](img-%20console/putty-1.jpg)

Выставляем параметры COM-порта

:::tip

Для ARMbian ставим скорость 1500000 (1,5Мбит)

Для NapiLinux ставим скорость 115200

Flow Control отключаем !

:::

Идем в Sessions. Выбираем Serial (отобразятся введенные нами параметры) и нажимаем OPEN.

![](img-%20console/putty-2.jpg)

### Работаем в консоли

Появиться окно (скорее всего пустое). Если нажать на любую клавишу, 
появиться приглашение для входа в Linux

![](img-%20console/putty-3.jpg)

Вводите логин\пароль и начинайте работать

![](img-%20console/putty-4.jpg)

Для того чтобы посмотреть процесс загрузки и прервать для входа в uboot, перезагрузите NAPI - вы увидите полный процесс загрузки.

![](img-%20console/putty-5.jpg)

### Войдем в uboot

Чтобы войти в uboot надо при загрузке быстро нажать 

- Для Armbian: Control-C
- Для NapiLinux: любую клавишу

![](img-%20console/putty-6.jpg)

Поздравляем, теперь вы полноценно можете работать c NAPI из консоли, хотя намного удобнее работать по сети по ssh, что мы и рекомендуем.  


## Косоль в Linux: Minicom

Для Linux есть стандартный универсальный программный продукт: minicom. Как правило он присуствует в системе, но если нет его мжно поставить командой

```bash

apt install minicom

```

Для того, чтобы каждый раз не отключать FlowControl через настройки порта можно сделать два фаила конфигураций (для Armbian и Linux) и использовать их при запуске.

Сделайте на своем компьютере\нотубуке два файла 

1. Файл для Armbian:  `.minirc.napi-1M.minicom`
```text

pu rtscts           No 
pu xonxoff          No
pu baudrate         1500000 

```
2. Файл для NapiLinux: `.minirc.napi-115200.minicom`
   
```text

pu rtscts           No 
pu xonxoff          No
pu baudrate         115200 

```

3. Запускайте minicom, указав устройство через параметр -D

Для Armbian: 

```bash

minicom -D /dev/ttyUSB0 napi-1M.minicom

```

Для NapiLinux: 

```bash

minicom -D /dev/ttyUSB0 napi-115200.minicom

```

Надеемся, этот материал был полезен и Вам не придется много работать с NAPI в консоли.