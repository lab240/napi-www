---
slug: emmc-hardware-reset
title: Программное включение аппаратного reset в eMMC
authors: dmn
tags: [emmc, hardware-reset, mmc, napi-slot, maskrom]
telegram_id: 25
---

## Продолжаем исследовать удивительный мир EMMC/SD

Столкнулись с удивительной ситуацией на Napi Slot - при нажатии кнопки MaskRom. Эта кнопка переводит процессор в режим прошивки (на самом деле кнопка подтягивает `MMC_RESET` к `GND` и отключает EMMC, чтобы процессор не нашел с чего грузить систему и вошёл в режим прошивки).

## Проблема

Так вот процессор никак не реагировал!

Выяснилось, что в некоторых EMMC аппаратный reset включается **ПРОГРАММНО**!

## Рецепт команд Linux

### Считать текущий статус
```bash
sudo mmc extcsd read /dev/mmcblk0 | grep -i RST_N_FUNCTION
```

### Включить аппаратный reset у eMMC

**Операция необратимая:**

```bash
sudo mmc hwreset enable /dev/mmcblk0
```

### Проверить результат

```bash
sudo mmc extcsd read /dev/mmcblk0 | grep -i RST_N_FUNCTION
```

Должно поменяться на `RST_N_FUNCTION: 0x01`

#emmc #hard #napi
