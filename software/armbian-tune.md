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

```

Поместите данный список в файл `packages.txt` (`nano packages.txt`), выполните команду:

```bash
xargs apt-get -y install < packages.txt
```

Все пакеты должны установиться автоматически !

>Теперь у вас есть утилита mbpoll для работы с modbus, pip3 - система установки пакаджей для python3, средства для работы с git, средаства для компилирования программ (понадобиться ниже).

### Скомпилируем mbusd 

Mbusd - открытый шлюз гейт Modbus RTU- Modbus TCP

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

### Перегрузка при панике ядра

Заставим систему перегружаться при панике ядра (маловероятно, но все-таки)

Открыть файл `/etc/sysctl.conf`

Добавить или раскомментировать строчку

```text
kernel.panic = 5
```

Сохранить файл

### Добавим поддержку UART сборщика

Добавим оверлеи, чтобы заработали UART (RS485)

Создать каталог и перейти в него

```bash
mkdir -p /boot/overlay-user
cd /boot/overlay-user
```

Скачать два файла

```bash

wget https://github.com/dmnovikov/napiguide/raw/main/patches/armbian-dtbo/rk3308-uart1.dtbo
wget https://github.com/dmnovikov/napiguide/raw/main/patches/armbian-dtbo/rk3308-uart2.dtbo

```
В файл `/boot/armbianEnv.txt` добавить строчку

```text

user_overlays=rk3308-uart1 rk3308-uart3"

```

Перегрузиться ! Теперь должны корректно работать UART порты `/dev/ttyS1 /dev/ttyS3`

>:warning: RS485й порт находится UART3, устройство /dev/ttyS3

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