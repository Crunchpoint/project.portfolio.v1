import React from "react";
import styles from "@/styles/header/Header.module.scss";
import Header_inner from "./Header_inner";
import Header_main from "./Header_main";

export default function Nav() {
  return (
    <header className={styles.header}>
      <Header_main />
      <Header_inner />
    </header>
  );
}
