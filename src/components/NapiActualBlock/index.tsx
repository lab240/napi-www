
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
          <b className={styles.accent}><a href="/docs/computers/napi-m/">Новая плата NAPI-M</a></b>{" "}
          — RK3562, Gigabit Ethernet, MIPI DSI/CSI. Принимаем заявки на тестирование
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/napi2-astra-linux">NAPI2 и Astra Linux</a></b>{" "}
          — одобрена поставка с Astra Linux, сертификат READY FOR ASTRA
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/elron-eltay-rm66">Napiworld и ELRON</a></b>{" "}
          — тестируем сборщики на российском модуле ELTAY RM66
        </li>
        <li>
          Две новые статьи на Хабр в <b className={styles.accent}><a href="/software/presscenter/papers/">Пресс-центре</a></b>
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/new-boards-2026-09">Новые платы для NAPI</a></b>{" "}
          — платы на модулях NAPI-C и NAPI-Slot
        </li>
        <li>
           Две новые статьи в <b className={styles.accent}> <a href="/software/presscenter/papers/">Пресс-центре</a></b>{" "}
          и новый кейс в разделе<b className={styles.accent}> <a href="/cases/">Кейсы</a></b> на основе одной из статей
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/rosa-chrome-napi-support">РОСА Хром 13</a></b>{" "}
          сертифицированная ОС на Napi-C, Napi-P, Napi2
        </li>
        <li>
                   <b className={styles.accent}><a href="/docs/computers/napi2/"> NAPI2 </a></b>  Новый одноплатный компьютер на основе RK3568J. Подан в комиссию Минпромторг.
        </li>
       </ul>

      <a href="/blog/" className={styles.more}>
        Все новости →
      </a>
    </section>
  );
}
