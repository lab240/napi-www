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
      <b>Заявка на тестирование:</b>{" "}
      <a href="/forms/napiorder/">
        <b>Анкета</b>
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
    <span className={styles.title}>Техблог: свежее</span>
  </div>

  <ul className={styles.list}>
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

    <li>
      <b className={styles.accent}>
        <a href="/recipes/z2m-openwrt">
          Zigbee2mqtt для OpenWRT
        </a>
      </b>{" "}
       готовый релиз
    </li>

    <li>
      <b className={styles.accent}>
        <a href="/recipes/openwrt-napi-architecture">
          OpenWRT на платах NAPI
        </a>
      </b>{" "}
       сборки и инструкции
      </li>
  </ul>

  <a href="/recipes/" className={styles.more}>
    Все статьи →
  </a>
</section>


    </div>
  );
}
