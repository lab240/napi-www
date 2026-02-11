
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
          <b className={styles.accent}><a href="/docs/napi2/"> NAPI2 </a></b> на основе RK3568J
        </li>
        <li>
          Новый ПАК{" "}
          <b className={styles.accent}><a href="/docs/special/FCU3308PZ/">FCU3308PZ</a></b>{" "}
          (Система сбора данных ZigBee на NAPI-C)
        </li>
        <li>
          <b className={styles.accent}><a href="http://napilinux.ru"  target="_blank">NapiLinux 0.2.6.1</a></b>{" "}
          — Linux для встраиваемых систем
        </li>
      </ul>

      <a href="/blog/" className={styles.more}>
        Все новости →
      </a>
    </section>
  );
}
