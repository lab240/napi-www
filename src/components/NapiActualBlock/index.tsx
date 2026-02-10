
import React from "react";
import styles from "./styles.module.css";

export default function NapiActualBlock() {
  return (
    <section className={styles.actual}>
      <div className={styles.header}>
        <div className={styles.icon}>⚡</div>
        <span className={styles.title}>Самое актуальное</span>
      </div>

      <ul className={styles.list}>
        <li>
          Новый одноплатный компьютер{" "}
          <b className={styles.accent}>NAPI2</b> на основе RK3568J
        </li>
        <li>
          Новый ПАК{" "}
          <b className={styles.accent}>FCU3308PZ</b>{" "}
          (Система сбора данных ZigBee на NAPI-C)
        </li>
        <li>
          <b className={styles.accent}>NapiLinux 0.2.6.1</b>{" "}
          — Linux для встраиваемых систем
        </li>
      </ul>

      <a href="/news" className={styles.more}>
        Все новости →
      </a>
    </section>
  );
}
