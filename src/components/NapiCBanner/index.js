
import React from 'react';
import styles from './styles.module.css';

export default function NapiCBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <img src="/img/napi-c-banner.png" alt="Napi-C" />
      </div>

      <div className={styles.right}>
        <h2>Napi-C — это</h2>
        <p>
          Одноплатный процессорный модуль на основе ARM процессора
          Rockchip RK3308 под управлением Linux.
        </p>

        <a className={styles.button} href="https://napiworld.ru">
          Подробнее
        </a>
      </div>
    </div>
  );
}
