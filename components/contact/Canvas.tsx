import React from "react";
import styles from "@/styles/contact/Canvas.module.scss";

export default function Canvas() {
  const fallingStars = 10;
  const items = [...Array(fallingStars)].map((_, i) => ({
    className: `stars${i + 1}`,
  }));
  return (
    <>
      {items.map((stars, index) => {
        return <div className={`${styles.falling} ${styles[stars.className]}`} key={index} data-count={fallingStars}></div>;
      })}
    </>
  );
}
