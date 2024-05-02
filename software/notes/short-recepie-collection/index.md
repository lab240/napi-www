---
hide_table_of_contents: false
sidebar_position: 200
---

# Коллекция коротких приемов

## Как сохранить файл в vim когда вы забыли sudo 

Если вы редактируете файл в vim не из под root и не через sudo,
то редактор не даст вам сохранить файл через команду `:w`

Есть изящное решение через sudo !

Вместо команды 

```vim
:w
```

Наберите команду 

```vim
:w !sudo tee %
```

И нажмите L для загрузки файла обратно в окно vim

Ссылки

Подсмотрено тут:  https://www.cyberciti.biz/faq/vim-vi-text-editor-save-file-without-root-permission/

Проверено, работает !

## Мониторинг встроенных сенсоров процессора

Пакет Armbian

```bash
apt install lm-sensors
```

Опросить сенсоры

```bash
sensors
```

Опросить с обновлением 1 раз в секунду

```
watch -n 1 -d sensors
```

В ArmBian есть программка `armbianmonitor`, но она не показывет температуру.

```bash
root@napi-armbian:~# armbianmonitor -m
Stop monitoring using [ctrl]-[c]
Time        CPU    load %cpu %sys %usr %nice %io %irq  C.St.

15:00:53   600 MHz  0.00   1%   0%   0%   0%   0%   0%  0/3
15:00:58   408 MHz  0.00   0%   0%   0%   0%   0%   0%  0/3
```

:warning: В настоящее время нет данных по температуре процессора RK3308 