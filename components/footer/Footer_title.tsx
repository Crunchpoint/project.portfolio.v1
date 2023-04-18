import React from "react";
import styles from "@/styles/footer/Footer_title.module.scss";

export default function Footer_title() {
  return (
    <div className={styles.footer__title}>
      <p className={styles.heading}>Jihoon Lee 2023</p>
      <p className={styles.caps}>frontend developer</p>
    </div>
  );
}
