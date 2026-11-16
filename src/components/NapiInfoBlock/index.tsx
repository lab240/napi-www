import React from "react";
import styles from "./styles.module.css";

export default function NapiInfoBlock() {
  return (
    <div className={styles.grid}>

      {/* Связь и каналы */}
      <section className={styles.card}>
  <div className={styles.header}>
  {/*
     <div className={styles.iconCircle} title="Связь">💬</div>
  */}
    <div className={styles.icon}>MSG</div>
    <span className={styles.title}>Связь с нами</span>
  </div>

  <ul className={styles.list}>
    <li>
      🔥🔥<b>Возьмите на тестирование бесплатно:</b>{" "}
      <a href="/forms/napiorder/">
        <b>Заполните заявку</b>
      </a>
    </li>

    <li>
      Telegram (продукты):{" "}
      <a href="https://t.me/napiworld" target="_blank" rel="noreferrer">
        @napiworld
      </a>
    </li>

    <li>
      Telegram (технический):{" "}
      <a href="https://t.me/napilab" target="_blank" rel="noreferrer">
        @napilab
      </a>
    </li>


    <li>
      Yandex Dzen:{" "}
      <a href="https://dzen.ru/napilab">
        канал NapiLab
      </a>
    </li>


    <li>
      Email:{" "}
      <a href="mailto:napi-at-nnz.ru">
        napi-at-nnz.ru
      </a>
    </li>
  </ul>
</section>

      {/* Заявка на тестирование — КАК ИНФО-КАРТОЧКА */}
      <section className={styles.actual}>
  <div className={styles.header}>
    <div className={styles.icon}>TB</div>
    <span className={styles.title}>Лента знаний: свежее</span>
  </div>

  <ul className={styles.list}>
    <li>
      <b className={styles.accent}>
        <a href="/downloads/napi-discover/">
          Napi Discovery
        </a>
      </b>{" "}
      поиск NAPI в сети, SSH и консоль для Windows и Linux
    </li>

    <li>
      <b className={styles.accent}>
        <a href="/recipes/napi-c-crash-debug">
          Отладка паники NAPI-C
        </a>
      </b>{" "}
      ядро, ramoops, сторож, возврат на SD
    </li>

    <li>
      <b className={styles.accent}>
        <a href="/recipes/influxdb-size">
          Размер базы InfluxDB
        </a>
      </b>{" "}
      год записи раз в секунду - около 60 MB
    </li>

    <li>
      <b className={styles.accent}>
        <a href="/recipes/mbslave">
          modbus-slave
        </a>
      </b>{" "}
      эмулятор modbus датчика
    </li>

    <li>
      <b className={styles.accent}>
        <a href="/recipes/mbscan-tool">
        mbscan
        </a>
      </b>{" "}
      - быстрый поиск Modbus устройств
    </li>

  </ul>

  <a href="/recipes/" className={styles.more}>
    Все статьи →
  </a>
</section>


    </div>
  );
}
