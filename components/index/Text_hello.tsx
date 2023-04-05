import React from "react";
import styles from "@/styles/index/Text_hello.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";

interface Text_helloProps {
  text: string;
}

export default function Text_hello({ text }: Text_helloProps): JSX.Element {
  const { isReady } = useContext(MyContext);
  const mainText = text;
  const words = mainText.split("\n");
  let cumulativeDelay = 0;

  return (
    <section className={styles.text__wrapper}>
      {words.map((word, index) => {
        return (
          <span key={index} className={styles.text__wrapper__span}>
            {word.split("").map((char, index2) => {
              cumulativeDelay += 0.03;
              return (
                <motion.span
                  key={index2}
                  className={styles.text__wrapper__span__char}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: cumulativeDelay, duration: 1 }}
                  data-isready={isReady}>
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </section>
  );
}
