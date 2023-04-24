import React from "react";
import styles from "@/styles/Room.module.scss";
import Image from "next/image";
import MyPhoto from "@/public/img/hoon.jpg";

export default function Room(): JSX.Element {
  return (
    <div className={styles.workspace}>
      <div className={styles.clock}>
        <div className={styles.top}></div>
        <div className={styles.right}></div>
        <div className={styles.bottom}></div>
        <div className={styles.left}></div>
        <div className={styles.center}></div>
        <div className={styles.hour}></div>
        <div className={styles.minute}></div>
        <div className={styles.second}></div>
      </div>
      <div className={styles.shelf}>
        <ul>
          <li className={styles.ipad}></li>
          <li className={styles.books}>
            <span></span>
            <span>
              <i></i>
            </span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
        <div></div>
      </div>
      <div className={styles.desk}>
        <div className={styles.table}>
          <div className={styles.right_tb}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className={styles.mouse}></span>

          <span className={styles.cup}>
            <i></i>
          </span>

          <span className={styles.router}>
            <ul>
              <li>
                <i></i>
              </li>
              <li></li>
            </ul>
          </span>

          <div className={styles.imac}>
            <Image src={MyPhoto} alt={"hoon"} />
            <span className={styles.note}>
              How was your journy
              <br />
              with me?
            </span>
          </div>

          <span className={styles.bk_screen}>
            <i></i>
          </span>

          <span className={styles.iphone}></span>
        </div>

        <div className={styles.chair}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <i className={styles.shadows}></i>
        </div>

        <div className={styles.trash}>
          <i className={styles.shadows}></i>
        </div>
      </div>
    </div>
  );
}
