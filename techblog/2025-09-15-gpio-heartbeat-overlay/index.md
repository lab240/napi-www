---
slug: gpio-heartbeat-overlay
title: Перенос heartbeat диода на пользовательский GPIO через overlay
authors: dmn
tags: [gpio, heartbeat, overlay, armbian, dts]
telegram_id: 18
---

## Как перенести "софтовым" методом heartbit (диод активности) с встроенного GPIO на свободный  

По умолчанию диод на GPIO находится на 
`GPIO0A5`, у нас в NAPI его нет на "гребёнке", 
подтому мы его перекинем на `GPIO3B3`, который есть на "гребёнке" и ничем не занят.

## Научимся делать user-overlay к ядру 

### Добавляем оверлей в Armbian

Сделать файл `blue-led-gpio3b3-2.dts` и добавить его как оверлей 

```bash
armbian-add-overlay blue-led-gpio3b3-2.dts
```
Команда сама скомпилирует dtbo, перенесем его в нужную папку и добавит запись в файл armbianEnv.txt.

Останется только перегрузится и убедиться, что диод "прикрепился" к нашему пину (визуально он станет сразу помигивать). Как проверить на каком GPIO оказался диод - в конце поста.

### Файл dts для Armbian

```
/dts-v1/;
/plugin/;

/ {
 fragment@0 {
     /* у вас узел именно под /leds */
     target-path = "/leds/blue-led";
     __overlay__ {
         gpios = <&gpio3 11 0>;       /* GPIO3_B3, ACTIVE_HIGH */
         linux,default-trigger = "heartbeat";
         default-state = "on";
         status = "okay";

         /* убрать pinctrl у конкретного LED, чтобы не валилось на -22 */
         /delete-property/ pinctrl-names;
         /delete-property/ pinctrl-0;
     };
 };
};

```

### Добавляем оверлей NapiLinux

Необходимо скомпилировать из dts файла, dtbo файл через утилиту dtc на любом Linux-хосте.

```
dtc -@ -I dts -O dtb -o blue-led-gpio3b3.dtbo blue-led-gpio3b3.dts
```

Делаем папку 

mkdir /boot/overlay-user
Получившийся файл dtbo (blue-led-gpio3b3.dtbo) закинуть  в  /boot/overlay-user

Добавить строчку в файл /boot/uEnv.txt

user_overlays=blue-led-gpio3b3
Файл dts для NapiLinux

```
/dts-v1/;
/plugin/;

/ {
 fragment@0 {
     /* у вас узел именно под /leds */
     /* target-path = "/leds/blue-led"; */
     target-path = "/gpio-leds/blue-led";
     __overlay__ {
         gpios = <&gpio3 11 0>;       /* GPIO3_B3, ACTIVE_HIGH */
         linux,default-trigger = "heartbeat";
         default-state = "on";
         status = "okay";

     };
 };
};
```

### Проверка на каком gpio blue-led 

```
hexdump -v -e '1/4 "0x%08X "' -e '"\n"' /proc/device-tree/gpio-leds/blue-led/gpios
Должно выдать: <phandle gpio3, 0x0000000B, 0x00000000>
```

#gpio #napi #dts
