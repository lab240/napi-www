import React from "react";
import styles from "./styles.module.css";

export default function NapiFootnote() {
  return (
    <div className={styles.footnote}>
      При поддержке{" "}
      <a href="https://comintech.pro/" target="_blank" rel="noreferrer">
        ООО «Коминтех»
      </a>{" "}
      и{" "}
      <a href="http://nnz-ipc.ru" target="_blank" rel="noreferrer">
        ООО «Ниеншанц-Автоматика»
      </a>
    </div>
  );
}
