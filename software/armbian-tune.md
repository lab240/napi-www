---
hide_table_of_contents: false
sidebar_position: 20
---

# Установка и тюнинг чистого Armbian

Тюнинг Armbian для работы с Napi и Сборщик-компакт

:::tip

Эта инструкция для продвинутых пользователи Linux, Вы можете скачать готовый образ, где уже проведены все операции, по ссылке: https://packages.nnz-ipc.net/napi/armbian-for-napi/

:::

## Ставим чистый ARMbian для Rock Pi S


### Скачайте образ по ссылке: 

https://redirect.armbian.com/rockpi-s/Bookworm_current


Имя файла будет похоже на следующее - **Armbian_23.5.2_Rockpi-s_bookworm_current_6.1.32.img.xz**

Распаковать образ и записать образ на SD-карту

или

Загрузить NAPI c SD карты в NapiLinux, вставить флешку с 
распакованным файлом образа и записать имидж в NAND по [инструкции](flash_to_nand)

Загрузить ARMbian. Войти по SSH (Логин\Пароль root\1234)

>При первой загрузке ARMbian задаст вопросы про язык, локаль, часовой пояс, дополнительного пользователя - надо пройти все эти вопросы (в подготовленном имидже мы уже все сделали). 

## Проводим тюнинг Armbian

### Проведите апдейт системы

```bash
apt update
apt upgrade
```

Теперь вы можете ставить любые доступные пакеты в Armbian (Debian) программой `apt install packet`
 
### Поставить рекомендуемые нами пакеты
   
```
telnet
mbpoll 
snmpd
snmp
snmp-mibs-downloader
vim
cmake      
pkg-config 
plocate 
gh 
mosquitto
mosquitto-clients
python3-pip
python3-dev

```

Поместите данный список в файл `packages.txt` (`nano packages.txt`), выполните команду:

```bash
xargs apt-get -y install < packages.txt
```

Все пакеты должны установиться автоматически !

>Теперь у вас есть утилита mbpoll для работы с modbus, pip3 - система установки пакаджей для python3, средства для работы с git, средаства для компилирования программ (понадобиться ниже).

### Перегрузка при панике ядра

Заставим систему перегружаться при панике ядра (маловероятно, но все-таки)

Открыть файл `/etc/sysctl.conf`

Добавить или раскомментировать строчку

```text
kernel.panic = 5
```

Сохранить файл

## Добавление аппаратных  интерфейсов 

В Armbian (и других современных Linux) включение аппаратных и нестандартных интерфейсов (uart, i2c, spi) работает через систему подключаемых оверлеев (файлы в формате dtbo - device tree binary). Это бинарные файлы, которые компилируются из исходных текстовых файлов dts (data tree source). 

Для большинства интерфейсов и распространенных устройств файлы dts и dtbo уже скомпилированы и их достаточно разместить и указать в конфигурационном файле загрузчика. Как это делать будет показано ниже. 

### Добавим поддержку UART3

:::tip

"Сборщик-компакт" порт RS485 работает через UART3. Поэтому его надо добавить в ArmBian.
:::

Создать каталог и перейти в него

```bash
mkdir -p /boot/overlay-user
cd /boot/overlay-user
```

Скачать файл

```bash

wget https://github.com/dmnovikov/napiguide/raw/main/patches/armbian-dtbo/rk3308-uart3.dtbo

```
В файл `/boot/armbianEnv.txt` добавить `rk3308-uart3` в строчку `user_overlays=`

```text

user_overlays=rk3308-uart1 rk3308-uart3"

```

Перегрузиться ! 

Теперь должен корректно работать порт UART3, устройство -  `/dev/ttyS3`

### Добавить поддержку UART1

Аналогично, через механизм оверлеев, можно добавить работу UART1 

UART1

```
cd /boot/overlay-user
wget https://github.com/dmnovikov/napiguide/raw/main/patches/armbian-dtbo/rk3308-uart1.dtbo

```
В файл `/boot/armbianEnv.txt` добавить строчку (uart3 можно оставить, будут работать оба порта)

```text

user_overlays=rk3308-uart1 rk3308-uart3"

```

### Особенности оверлея spi2 под ARMbian

Для того, чтобы в модуле Napi работал SPI2, необходимо отключить uart1 и uart2. Так как в ARMbian они включены в основном файле дерева устройств, то в оверлее spi2 необходимо отключить явным образом uart1, uart2.

1. Сделайте файл `rk3308-spi2-spidev.dts` такого содержания:

```

/dts-v1/;
/plugin/;

/ {
	compatible = "rockchip,rk3308";

	fragment@0 {
		target = <&spi2>;
		__overlay__ {
			#address-cells = <1>;
			#size-cells = <0>;
			status = "okay";
			spidev@0 {
				compatible = "rohm,dh2228fv";
				status = "okay";
				reg = <0>;
				spi-max-frequency = <10000000>;
			};
		};
	};

 fragment@1 {
    target = <&uart1>;
    __overlay__ {
      status = "disabled";
    };
  };
  fragment@2 {
    target = <&uart2>;
    __overlay__ {
      status = "disabled";
    };
  };

};

```

2. Выполните команду

```
armbian-add-overlay rk3308-spi2-spidev.dts
```

Эта команда автоматически скомпилирует и добавит overlay для SPI2. 

3. Перезагрузитесь. Должно появиться устройство `/dev/spidev2.0`

:::tip

Таким образом в ARMbian можно создавать и добавлять из файлов dts и другие оверлеи,
исходные данные которых можно скачать по ссылке: https://gitlab.nnz-ipc.net/pub/napilinux/kernel/-/tree/linux6.6/arch/arm64/boot/dts/rockchip/overlay 

:::


###  Добавление поддержки других оверлеев

Добавление других оверлеев можно делать различными способами.

1. Добавлять файл готовый .dtbo, аналогично описанному способу (UART1,3). 

Список доступных dtbo оверлеев:

```bash 

i2c1-hym8563.dtbo             rk3308-uart0.dtbo
rk3308-console-on-uart0.dtbo  rk3308-uart1.dtbo
rk3308-console-on-uart1.dtbo  rk3308-uart2.dtbo
rk3308-console-on-uart2.dtbo  rk3308-uart3.dtbo
rk3308-i2c0.dtbo              rk3308-usb20-host.dtbo
rk3308-i2c1-ds1307.dtbo       rk3308-usb-pcie-modem.dtbo
rk3308-i2c1-ds3231.dtbo       rk3308-w1-gpio.dtbo
rk3308-i2c1.dtbo              rockchip-fixup.scr
rk3308-i2c2.dtbo              rockpis-dmic-8ch-pdm.dtbo
rk3308-i2c3.dtbo              rockpis-i2s-out.dtbo
rk3308-i2c3-m0.dtbo           rockpis-spdif-out.dtbo
rk3308-i2c3-m1.dtbo           rockpis-v11-spi2-waveshare35b-v2.dtbo
rk3308-pwm1.dtbo              rockpis-v11-spi2-waveshare35c.dtbo
rk3308-pwm2.dtbo              rockpis-v12-spi2-waveshare35b-v2.dtbo
rk3308-pwm3.dtbo              rockpis-v12-spi2-waveshare35c.dtbo
rk3308-spi-spidev.dtbo

```

>[Скачать](overlays/overlays-rk3308/overlays-rk3308-1.zip) архив (zip) со всеми оверлеями.


2. Компилировать dts и добавлять файлы оверлеев командой `armbian-add-overlay <dts file>`  
   
[Список](https://gitlab.nnz-ipc.net/pub/napilinux/kernel/-/tree/linux6.6/arch/arm64/boot/dts/rockchip/overlay) dts файлов для rk3308 (все устройства Napi).

:::tip Ньюансы NAPI

Следует обратить внимание на нюансы:

:warning: Обратите внимание, что некоторые интерфейсы нельзя использовать одновременно. При использовании шины SPI2, необходимо отключить UART2 и UART1. 

:warning: Шина SPI1 в настоящий момент не работает, при необходимости подключения устройств по SPI, используйте SPI2.

:::tip

## Установка системного и прикладного ПО

### Установим утилиту modpoll 

>:warning: Несмотря на то, что в системе присутствует практически такая же утилита mbpoll аргументы у них
немного различаются. Мы можем давать примеры на основе утилиты modpoll, поэтому рекомендуем ее тоже установить.

Скачать архив командой

```bash
wget https://www.modbusdriver.com/downloads/modpoll.tgz

```

Распаковать полученный архив

```bash
https://www.modbusdriver.com/downloads/modpoll.tgz

```

Скопировать файл 

```bash 
cp modpoll/arm-linux-gnueabihf/modpoll /usr/bin/
```

Убедиться, что утилита доступна и запускается

```bash
modpoll -h
```
### Скомпилируем mbusd 

Mbusd - открытый шлюз Modbus RTU - Modbus TCP

Стянем исходный код с github
```bash
git clone https://github.com/3cky/mbusd.git mbusd.git
```

Проведем компилирование

```bash
cd mbusd.git
mkdir -p build && cd build
cmake -DCMAKE_INSTALL_PREFIX=/usr ..
make
sudo make install

```

Проверим, что пакет установился через команду `mbusd`

### Настроим snmpd 
    
    Устройство начнет отдавать стандартную информацию о сбе по протоколу SNMP (в дальнейшем это можно использовать, добавив устройства в Zabbix).

Редактируем файл ` /etc/snmp/snmpd.conf`

Находим строку

```text
agentaddress  127.0.0.1,[::1]
```

Меняем на строку 

```text
agentaddress  0.0.0.0,[::1]
```

Или выполняем команду

```bash
sed -i "s/agentaddress  127.0.0.1,[::1]/agentaddress  0.0.0.0,[::1]/g" /etc/snmp/snmpd.conf
```

Перезапускаем сервис snmpd

```bash
service snmpd restart 
```

Убедиться, что он работает можно командой 

```bash
service snmpd status
```

### Добавим работу с GPIO через gpiod

К сожалению, по умолчанию в Armbian довольно старая версия gpiod, поэтому 
мы написали статью, [как установить свежую версию gpiod](gpiod2) и работать с командами пакета.

Как работать с gpio через систему sysfs можно прочитать по ссылке: https://developer.technexion.com/docs/using-gpio-from-a-linux-shell#using-legacy-sysfsbased-gpio