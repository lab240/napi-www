import React from "react";
import styles from "./styles.module.css";

import napi2 from "@site/docs/computers/napi2/img-nature/front-1.jpg";
import napic from "@site/docs/computers/napi-c/img/napi-c-single.jpeg";
import napislot from "@site/static/img/napi-som/napislot1.jpeg";
import fcc3308 from "@site/docs/computers-industrial/FCC3308/img/FCC3308-black1.jpg";
import fccm3308 from "@site/docs/computers-industrial/FCCM3308/img/fccm3308smallslot.jpg";
import fcu3568 from "@site/docs/computers-industrial/FCU3568/img/fcu3568-3.jpg";
import fgm0801 from "@site/docs/special/frontgate-m/img/main/intro-1.jpg";
import fcu3308p from "@site/docs/computers-industrial/FCU3308P/img/fcu3308-main-1.jpg";

const items = [
  { name: "NAPI2", tag: "Одноплатный компьютер", img: napi2, to: "/docs/computers/napi2/" },
  { name: "NAPI-C", tag: "Одноплатный компьютер", img: napic, to: "/docs/computers/napi-c/" },
  { name: "NAPI Slot", tag: "Процессорный модуль", img: napislot, to: "/docs/soms/napi-slot/" },
  { name: "FCC3308", tag: "Промышленный ПК", img: fcc3308, to: "/docs/computers-industrial/FCC3308/" },
  { name: "FCCM3308", tag: "Промышленный ПК", img: fccm3308, to: "/docs/computers-industrial/FCCM3308/" },
  { name: "FCU3568", tag: "Промышленный ПК", img: fcu3568, to: "/docs/computers-industrial/FCU3568/" },
  { name: "FGM0801", tag: "Готовое решение", img: fgm0801, to: "/docs/special/frontgate-m/" },
  { name: "FCU3308P", tag: "Промышленный ПК", img: fcu3308p, to: "/docs/computers-industrial/FCU3308P/" },
];

export default function NapiCatalogCollage() {
  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        {items.map((it) => (
          <a key={it.name} href={it.to} className={styles.tile}>
            <div className={styles.imgBox}>
              <img src={it.img?.src?.src ?? it.img} alt={it.name} loading="lazy" />
            </div>
            <div className={styles.caption}>
              <span className={styles.name}>{it.name}</span>
              <span className={styles.tag}>{it.tag}</span>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.cta}>
        <a href="/docs/catalog" className="button button--primary button--lg">
          Открыть полный каталог →
        </a>
      </div>
    </section>
  );
}
