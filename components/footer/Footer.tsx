import React from "react";
import styles from "@/styles/footer/Footer.module.scss";
import Footer_title from "./Footer_title";
import Footer_social from "./Footer_social";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Footer_social />
      <Footer_title />
    </footer>
  );
}
