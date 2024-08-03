---
hide_table_of_contents: false
sidebar_position: 20
---

# Установка и тюнинг чистого Armbian

Тюнинг Armbian для работы с Napi и Сборщик-компакт

:::tip

Эта инструкция для продвинутых пользователи Linux, Вы можете скачать готовый образ, где уже проведены все операции, по ссылке: [https://packages.nnz-ipc.net/napi/armbian-for-napi/](https://packages.nnz-ipc.net/napi/armbian-for-napi/)

:::

## Ставим чистый ARMbian для Rock Pi S

### Скачайте образ по ссылке

[https://redirect.armbian.com/rockpi-s/Bookworm_current](https://redirect.armbian.com/rockpi-s/Bookworm_current)

Имя файла будет похоже на следующее - **Armbian_23.5.2_Rockpi-s_bookworm_current_6.1.32.img.xz**

Распаковать образ и записать образ на SD-карту

или

Загрузить NAPI c SD карты в NapiLinux, вставить флешку с
распакованным файлом образа и записать имидж в NAND по [инструкции](../../flash-backup/flash_to_nand)

Загрузить ARMbian. Войти по SSH (Логин\Пароль root\1234)

>При первой загрузке ARMbian задаст вопросы про язык, локаль, часовой пояс, дополнительного пользователя - надо пройти все эти вопросы (в подготовленном имидже мы уже все сделали).

## Проводим тюнинг Armbian

### Проведите обновление системы

```bash
apt update
apt upgrade
```

Теперь вы можете ставить любые доступные пакеты в Armbian (Debian) программой `apt install packet`

### Поставить рекомендуемые нами пакеты

```text
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

>Теперь у вас есть утилита mbpoll для работы с modbus, pip3 - система установки пакетов для python3, средства для работы с git, средства для компилирования программ (понадобиться ниже).

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

В Armbian есть утилита, которая компилирует и добавляет оверлей из пользовательского файла dts.

Общий алгоритм такой. Нужно скачать или другим образом (через копи\паст) сформировать файл dts (название лучше делать по смыслу файла, например rk3308-spi2.dts) и далее выполнить команду

```bash
armbian-add-overlay <файл.dts>
```

Обязательно перегрузиться.

После этого должно заработать устройство, которое Вы подключили, если **оно не конфликтует с другими устройствами**. Конфликты зависят от включенных устройствах по умолчанию, от аппаратной конфигурации устройства.

:::tip

Например, в NAPI не может работать одновременно UART1,2 и SPI2 а также UART3 и SPI1

:::

Файлы dts для rk3308 (всех NAPI) доступны по ссылке: [https://gitlab.nnz-ipc.net/pub/napilinux/kernel/-/tree/linux6.6/arch/arm64/boot/dts/rockchip/overlay](https://gitlab.nnz-ipc.net/pub/napilinux/kernel/-/tree/linux6.6/arch/arm64/boot/dts/rockchip/overlay)

Список файлов

```text
rk3308-console-on-uart0.dts
rk3308-console-on-uart1.dts
rk3308-console-on-uart2.dts
rk3308-i2c0.dts
rk3308-i2c1-ds1307.dts
rk3308-i2c1-ds3231.dts
rk3308-i2c1.dts
rk3308-i2c2.dts
rk3308-i2c3-m0.dts
rk3308-i2c3-m1.dts
rk3308-i2c3.dts
rk3308-pwm1.dts
rk3308-pwm2.dts
rk3308-pwm3.dts
rk3308-spi-spidev.dts
rk3308-spi1-spidev.dts
rk3308-spi2-spidev.dts
rk3308-uart0.dts
rk3308-uart1.dts
rk3308-uart2.dts
rk3308-uart3.dts
rk3308-usb-pcie-modem.dts
rk3308-usb20-host.dts
rk3308-w1-gpio.dts

rockpis-i2s-out.dts
rockpis-spdif-out.dts
rockpis-v11-spi2-waveshare35b-v2.dts

rockpis-v11-spi2-waveshare35c.dts
rockpis-v12-spi2-waveshare35b-v2.dts
rockpis-v12-spi2-waveshare35c.dts
i2c1-hym8563.dts

```

Из этого списка примерно понятно какие устройства могут быть добавлены.

:::tip

В Armbian устройства uart0 (консоль), uart1, uart2 добавлены по умолчанию.

:::

### Добавим поддержку UART3

:::tip

В "Сборщик-компакт" порт RS485 работает через UART3. Поэтому его надо добавить в ArmBian.

:::

Создадим файл `rk3308-uart3.dts` (скопируем его содержания из файла по ссылке или ниже)

```text
/dts-v1/;
/plugin/;

/ {
 compatible = "rockchip,rk3308";

 fragment@0 {
  target = <&i2c3>;
  __overlay__ {
   status = "disabled";
  };
 };

 fragment@1 {
  target = <&spi1>;
  __overlay__ {
   status = "disabled";
  };
 };

 fragment@2 {
  target = <&uart3>;
  __overlay__ {
   status = "okay";
   pinctrl-names = "default";
   pinctrl-0 = <&uart3_xfer>;
  };
 };
};

```

Сохраним файл и выполним команду

```bash
armbian-add-overlay rk3308-uart3.dts
```

Эта команда автоматически скомпилирует и добавит overlay для UART3 (`/dev/ttyS3` в системе).

Проверить что все корректно скомпилировалось, можно проверив каталог `/boot/overlay-user`, там должен быть соответствующий файл  `rk3308-uart3.dtbo`

```bash
root@napi-armbian:~# ls /boot/overlay-user/
rk3308-i2c3-m0.dtbo  rk3308-spi2-spidev.dtbo  rk3308-uart1.dtbo  rk3308-uart3.dtbo
root@napi-armbian:~#

```

В файле /boot/armbianEnv.txt объявление устройства должно появиться в разделе `user-overlays=`

```text
root@napi-armbian:~# cat /boot/armbianEnv.txt
verbosity=1
extraargs=swiotlb=1024
overlay_prefix=rk3308
fdtfile=rockchip/rk3308-rock-pi-s.dtb
rootdev=UUID=5ef25166-64ed-4920-8994-f233ab2771c7
rootfstype=ext4
console=serial
user_overlays=rk3308-uart3 rk3308-i2c3-m0 rk3308-spi2-spidev
ethaddr=02:AE:83:87:2D:A0
usbstoragequirks=0x2537:0x1066:u,0x2537:0x1068:u

```

Не забудьте перегрузиться !

Теперь должен корректно работать порт UART3, устройство -  `/dev/ttyS3`. Чтобы проверить порт, нужно подсоединить к GPIO UART3 какое либо устройство.

### Добавим поддержку SPI2

:::tip Особенности оверлея spi2 под ARMbian

Для того, чтобы в модуле NAPI работал SPI2, необходимо отключить uart1 и uart2. Так как в ARMbian они включены в основном файле дерева устройств, то в оверлее spi2 необходимо отключить явным образом uart1, uart2. Правильный файл dts для SPI2 приводим  ниже.

:::

1. Сделайте файл `rk3308-spi2-spidev.dts` такого содержания:

```text

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

```bash
armbian-add-overlay rk3308-spi2-spidev.dts
```

Эта команда автоматически скомпилирует и добавит overlay для SPI2.

3. Перезагрузитесь. Должно появиться устройство `/dev/spidev2.0`

:::tip Нюансы NAPI

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

Редактируем файл `/etc/snmp/snmpd.conf`

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
мы написали статью, [как установить свежую версию gpiod](/software/notes/gpiod/) и работать с командами пакета.

Как работать с gpio через систему sysfs можно прочитать по ссылке: [https://developer.technexion.com/docs/using-gpio-from-a-linux-shell#using-legacy-sysfsbased-gpio](https://developer.technexion.com/docs/using-gpio-from-a-linux-shell#using-legacy-sysfsbased-gpio)
