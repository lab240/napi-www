---
slug: uboot-bootcmd-rk3308
title: U-Boot RK3308 - фиксируем bootcmd через rk_board_late_init
authors: dmn
tags: [uboot, napi2, rk3308, linux, embedded]
description: "Как жёстко зафиксировать bootcmd в U-Boot на RK3308, не отказываясь от saveenv. Используем хук rk_board_late_init()."
keywords: [uboot, bootcmd, rk3308, rk_board_late_init, saveenv, board_late_init, rockchip, embedded, linux]
---

# U-Boot RK3308: фиксируем bootcmd через rk_board_late_init

## Проблема

U-Boot хранит переменные окружения (env) в энергонезависимой памяти. Это удобно: можно сохранить нужные настройки через `saveenv` и они переживут перезагрузку. Проблема в том, что `bootcmd` - переменная, которая определяет, как именно загружается система, - тоже хранится в этом env.

Если в процессе отладки или обновления env был сохранён с одним `bootcmd`, а в новой версии прошивки нужна другая последовательность загрузки, то сохранённый env будет молча перебивать то, что прописано в исходниках. Система загрузится по-старому, и понять почему - непросто: U-Boot не предупреждает, что использует значение из сохранённого env вместо скомпилированного.

Классическое решение - `CONFIG_BOOTCOMMAND` - задаёт значение `bootcmd` по умолчанию, но только если переменная **не определена** в env. Стоит один раз выполнить `saveenv` с любым `bootcmd` - и `CONFIG_BOOTCOMMAND` перестаёт действовать навсегда на этом устройстве.

Нужно было жёстко задать `bootcmd` при каждом старте, не отказываясь от `saveenv` для остальных переменных.

<!--truncate-->

## Решение

Используется хук `rk_board_late_init()` - он вызывается **после** загрузки env из памяти, поэтому `env_set()` внутри него всегда перекрывает сохранённое значение. Что бы ни было записано в env - нужный `bootcmd` будет выставлен поверх.

### 1. `configs/napi-rk3308_defconfig`

```
CONFIG_BOARD_LATE_INIT=y
```

### 2. `board/rockchip/evb_rk3308/evb_rk3308.c`

```c
#include <env.h>

int rk_board_late_init(void)
{
	env_set("bootcmd",
		"setenv fdt_addr_r 0x01e00000;"
		"setenv kernel_addr_r 0x02080000;"
		"setenv ramdisk_addr_r 0x06000000;"
		"setenv kernel_comp_addr_r 0x08000000;"
		"setenv kernel_comp_size 0x04000000;"
		"bootflow scan");
	return 0;
}
```

## Почему не `CONFIG_BOOTCOMMAND`

`CONFIG_BOOTCOMMAND` задаёт дефолтное значение `bootcmd`, но только для случая, когда переменная **отсутствует** в env. Стоит устройству хоть раз выполнить `saveenv` - и `bootcmd` окажется зафиксирован в энергонезависимой памяти. После этого `CONFIG_BOOTCOMMAND` полностью игнорируется: U-Boot всегда предпочитает сохранённый env.

`rk_board_late_init()` выполняется **после** загрузки env - переменная всегда выставляется в нужное значение независимо от содержимого env.

## Почему `rk_board_late_init`, а не `board_late_init`

В `arch/arm/mach-rockchip/board.c` уже определён `board_late_init()`, который вызывает `rk_board_late_init()` как weak-хук. Переопределять `board_late_init()` нельзя - линкер выдаст ошибку `multiple definition`. Правильная точка расширения для Rockchip-плат - именно `rk_board_late_init()`.

## Адреса памяти

| Переменная           | Адрес        | Назначение            |
|----------------------|--------------|-----------------------|
| `fdt_addr_r`         | `0x01e00000` | Device Tree           |
| `kernel_addr_r`      | `0x02080000` | Ядро (несжатое)       |
| `ramdisk_addr_r`     | `0x06000000` | initrd                |
| `kernel_comp_addr_r` | `0x08000000` | Буфер распаковки ядра |
| `kernel_comp_size`   | `0x04000000` | Размер буфера (64 МБ) |
