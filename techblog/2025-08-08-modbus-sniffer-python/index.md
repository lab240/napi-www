---
slug: modbus-sniffer-python
title: Python-сниффер для анализа Modbus RTU трафика
authors: dmn
tags: [modbus, python, sniffer, debugging, serial]
telegram_id: 11
---

Написал "на коленке" полезный сниффер modbus

`modbus_sniffer_raw_pretty.py`

```python
#!/usr/bin/env python3
"""
Raw Modbus RTU Sniffer — listens to a serial port and prints decoded Modbus RTU frames.
Now includes decoding of address/count/value for popular function codes.
"""

import serial
import argparse
import time
import logging
import struct

logging.basicConfig()
log = logging.getLogger()
log.setLevel(logging.INFO)

def calculate_crc(data: bytes):
    crc = 0xFFFF
    for pos in data:
        crc ^= pos
        for _ in range(8):
            lsb = crc & 0x0001
            crc >>= 1
            if lsb:
                crc ^= 0xA001
    return crc.to_bytes(2, 'little')

def validate_crc(frame: bytes):
    if len(frame) < 4:
        return False
    data, received_crc = frame[:-2], frame[-2:]
    return calculate_crc(data) == received_crc

def decode_payload(fc, payload):
    if fc in [1, 2, 3, 4]:  # Read coils, discrete inputs, HR, IR
        if len(payload) >= 4:
            address, count = struct.unpack(">HH", payload[:4])
            return f"Read | Addr={address} | Count={count}"
    elif fc in [5, 6]:  # Write single coil/register
        if len(payload) >= 4:
            address, value = struct.unpack(">HH", payload[:4])
            return f"Write Single | Addr={address} | Value={value}"
    elif fc in [15, 16]:  # Write multiple coils/registers
        if len(payload) >= 5:
            address, count, byte_count = struct.unpack(">HHB", payload[:5])
            return f"Write Multiple | Addr={address} | Count={count} | Bytes={byte_count}"
    return f"Payload: {payload.hex()}"

def print_frame_info(frame: bytes):
    if not validate_crc(frame):
        log.warning(f"❌ Invalid CRC: {frame.hex()}")
        return
    unit_id = frame[0]
    function_code = frame[1]
    payload = frame[2:-2]
    desc = decode_payload(function_code, payload)
    log.info(f"📥 Unit={unit_id} | FC={function_code} — {desc}")

def read_frames(ser):
    buffer = bytearray()
    last_byte_time = time.time()
    inter_char_timeout = 0.01
    frame_timeout = 0.1

    while True:
        if ser.in_waiting:
            byte = ser.read(1)
            now = time.time()
            if now - last_byte_time > frame_timeout and buffer:
                print_frame_info(bytes(buffer))
                buffer.clear()
            buffer.append(byte[0])
            last_byte_time = now
        elif buffer and time.time() - last_byte_time > frame_timeout:
            print_frame_info(bytes(buffer))
            buffer.clear()
        else:
            time.sleep(0.005)

def main():
    parser = argparse.ArgumentParser(description="Raw Modbus RTU Sniffer with decoding")
    parser.add_argument('--port', required=True, help='Serial port (e.g. /dev/ttyUSB0)')
    parser.add_argument('--baudrate', type=int, default=9600)
    parser.add_argument('--parity', choices=['N', 'E', 'O'], default='N')
    parser.add_argument('--stopbits', type=int, choices=[1, 2], default=1)
    args = parser.parse_args()

    try:
        ser = serial.Serial(
            port=args.port,
            baudrate=args.baudrate,
            parity={'N': serial.PARITY_NONE, 'E': serial.PARITY_EVEN, 'O': serial.PARITY_ODD}[args.parity],
            stopbits=args.stopbits,
            bytesize=8,
            timeout=0
        )
        log.info(f"🔍 Listening on {args.port} at {args.baudrate} bps...")
        read_frames(ser)
    except Exception as e:
        log.error(f"Failed to open serial port: {e}")

if __name__ == "__main__":
    main()
```

использует библиотеку pyserial

```bash
pip install pyserial
```

Пример:

```bash
(venv) orangepi@cm4-right:~$ python3 modbus_sniffer_raw_pretty.py  --baudrate 9600 --port /dev/ttyS9
INFO:root:🔍 Listening on /dev/ttyS9 at 9600 bps...
INFO:root:📥 Unit=1 | FC=3 — Read | Addr=0 | Count=1
INFO:root:📥 Unit=1 | FC=3 — Read | Addr=10 | Count=2
```
Скрипт читает и  распознает пакеты modbus, запросы modbus транслирует на экран.

#modbus #modbussniffer