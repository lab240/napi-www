# Мониторинг встроенных сенсоров процессора

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