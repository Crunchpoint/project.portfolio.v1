import React from "react";
import styles from "@/styles/Sky.module.scss";

export default function Sky(): JSX.Element {
  const typeOfClouds = [
    { size: "large", className: "cloud_1" },
    { size: "normal", className: "cloud_2" },
    { size: "small", className: "cloud_3" },
    { size: "tiny", className: "cloud_4" },
    { size: "large", className: "cloud_5" },
    { size: "normal", className: "cloud_6" },
    { size: "small", className: "cloud_7" },
    { size: "tiny", className: "cloud_8" },
    { size: "small", className: "cloud_9" },
    { size: "normal", className: "cloud_10" },
    { size: "tiny", className: "cloud_11" },
    { size: "small", className: "cloud_12" },
  ];

  const clouds = typeOfClouds.map((cloud, index) => (
    <div key={index} className={`${styles.cloud} ${styles[`cloud__${cloud.size}`]} ${styles[`${cloud.className}`]}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  ));

  return <div className={styles.sky__wrapper}>{clouds}</div>;
}
