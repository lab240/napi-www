import React from "react";
import styles from "./styles.module.css";

export default function NapiInfoBlock() {
  return (
    <div className={styles.grid}>

      {/* Связь и каналы */}
      <section className={styles.card}>
        <div className={styles.iconCircle} title="Связь и каналы">💬</div>

        <ul className={styles.list}>
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
      <section className={styles.card}>
        <div className={styles.iconCircle} title="Тестирование">🚀</div>

        <p className={styles.ctaText}>
          Подайте заявку на тестирование продуктов NAPI
        </p>

        <a className={styles.buttonOutline} href="/testing">
          Заявка на тестирование
        </a>
      </section>

    </div>
  );
}
