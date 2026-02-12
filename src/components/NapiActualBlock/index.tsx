
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
          Мощная замена микроконтроллеру{" "}
          <b className={styles.accent}><a href="/docs/napi-intro/">NAPI-C</a></b> на основе RK3308 под управлением Linux{" "}
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
