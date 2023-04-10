import React from "react";
import styles from "@/styles/Stars.module.scss";

export default function Stars(): JSX.Element {
  return (
    <div className={styles.stars__wrapper}>
      <div className={styles.stars1} />
      <div className={styles.stars2} />
      <div className={styles.stars3} />
    </div>
  );
}
