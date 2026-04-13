import React from "react";
import styles from "./styles.module.css";
import NapiFootnote from "@site/src/components/NapiFootnote";

export default function NapiMissionBlock() {
  return (
    <section className={styles.block}>
      <div className={styles.header}>
        <div className={styles.icon}>💡</div>
        <span className={styles.title}>Придумано и произведено в России</span>
      </div>

      <p className={styles.text}>

          Наши продукты активно используются в основе промышленных контроллеров,
          Modbus, IoT и RoIP-шлюзов.Мы помогаем заказчикам на всех этапах внедрения наших разработок в проект —
        от доработки оборудования до адаптации Linux
        (Arbmian\NapiLinux) под конкретные задачи.  Наши решения применяются там, где важны{" "}
        компактность, низкое энергопотребление и
        интеграция.
        

          </p>

<NapiFootnote />

    </section>
  );
}
