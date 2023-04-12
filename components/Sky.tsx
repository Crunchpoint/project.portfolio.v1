import React from "react";
import styles from "@/styles/Sky.module.scss";

export default function Sky(): JSX.Element {
  const numberOfClouds = 20;
  const items = [...Array(numberOfClouds)].map((_, i) => ({
    className: `cloud${i + 1}`,
  }));

  return (
    <div className={styles.sky__wrapper}>
      {items.map((cloud, index) => {
        return (
          <div className={styles[`${cloud.className}`]} key={index} data-count={numberOfClouds}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
      })}
    </div>
  );
}
