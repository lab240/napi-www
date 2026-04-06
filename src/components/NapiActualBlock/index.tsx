
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
          Новый одноплатный компьютер{" "}
          <b className={styles.accent}><a href="/docs/napi2/"> NAPI2 </a></b> на основе RK3568J
        </li>
        <li>
          Мощная замена микроконтроллеру{" "}
          <b className={styles.accent}><a href="/docs/napi-intro/">NAPI-C</a></b> на основе RK3308 под управлением Linux{" "}
        </li>
        <li>
          <b className={styles.accent}><a href="http://napilinux.ru"  target="_blank">NapiLinux 0.2.7</a></b>{" "}
          — Linux для встраиваемых систем
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/openwrt-napi-support"  target="_blank">OpenWRT на NAPI-C\P\Slot</a></b>{" "}
         компактный Linux c Веб-интерфейсом
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/napi2-industrial-gateway-openwrt"  target="_blank">OpenWRT на NAPI2</a></b>{" "}
         полноценный промышленный шлюз
        </li>
        <li>
          <b className={styles.accent}><a href="/blog/repo-napilab-launch"  target="_blank">Открываем repo.napilab.ru</a></b>{" "}
         - запускаем репозиторий с modbus-пакетами
        </li>
      </ul>

      <a href="/blog/" className={styles.more}>
        Все новости →
      </a>
    </section>
  );
}
