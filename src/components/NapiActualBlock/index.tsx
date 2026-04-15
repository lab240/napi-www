
import React from "react";
import styles from "./styles.module.css";

export default function NapiActualBlock() {
  return (
    <section className={styles.actual}>
      <div className={styles.header}>
        <div className={styles.icon}>NB</div>
        <span className={styles.title}>Самое актуальное</span>
      </div>

      <ul className={styles.list}>
        <li>
                   <b className={styles.accent}><a href="/docs/napi2/"> NAPI2 </a></b>  Новый одноплатный компьютер на основе RK3568J. Подан в комиссию Минпромторг.
        </li>
        <li>
                    <b className={styles.accent}><a href="/docs/napi-intro/">NAPI-C</a></b> на основе RK3308 под управлением Linux. В реестре Минпромторг.{" "}
        </li>
        <li>
          <b className={styles.accent}><a href="http://napilinux.ru"  target="_blank">NapiLinux 0.2.7</a></b>{" "}
          — Linux для встраиваемых систем
        </li>
        <li>
          <b className={styles.accent}><a href="/software"  target="_blank">Книга знаний</a></b>{" "}
         - главные статьи по NAPI
        </li>
        <li>
          <b className={styles.accent}><a href="/downloads"  target="_blank">OpenWRT для продуктов NAPI</a></b>{" "}
         полноценный промышленный шлюз
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/repo-napilab-launch"  target="_blank">Открываем repo.napilab.ru</a></b>{" "}
         - запускаем репозиторий с modbus-пакетами
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/digest-2026-04">Обновления на сайте</a></b>{" "}
          — новые продукты, разделы загрузок и документация
        </li>
      </ul>

      <a href="/blog/" className={styles.more}>
        Все новости →
      </a>
    </section>
  );
}
