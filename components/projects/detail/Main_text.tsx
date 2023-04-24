import React, { useEffect, useRef } from "react";
import styles from "@/styles/projects/detail/Main_text.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";

import Link from "next/link";
import Image from "next/image";

interface Main_textProps {
  link: string;
  text: string;
  tool: string[];
}

export default function Main_text({ link, text, tool }: Main_textProps): JSX.Element {
  const { isReady, setMainTextHeight } = useContext(MyContext);
  const mainText = text;
  const words = mainText?.split("\n");
  const tools = tool;
  let cumulativeDelay = 0;
  const ref = useRef<
    HTMLDivElement & {
      offsetHeight: number;
    }
  >(null);

  useEffect(() => {
    const height = ref.current?.clientHeight;
    setMainTextHeight(height);
  });

  return (
    <div className={styles.text__wrapper} ref={ref}>
      {words?.map((word, index) => {
        return (
          <h1 key={index} className={styles.text__wrapper__h1}>
            {word.split("").map((char, index2) => {
              cumulativeDelay += 0.03;
              return (
                <motion.span
                  key={index2}
                  className={styles.text__wrapper__h1__char}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: cumulativeDelay + 0.25, duration: 1 }}
                  data-isready={isReady}>
                  {char}
                </motion.span>
              );
            })}
          </h1>
        );
      })}
      <div className={styles.details}>
        <div className={styles.details__body}>
          <p className={styles.mini__title}>Project</p>
          <div className={styles.mini__link}>
            <Link href='#'>
              <span className={styles.text} data-text={"Personal"}>
                Personal
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.details__body}>
          <p className={styles.mini__title}>Link</p>
          <div className={styles.mini__link}>
            {link && (
              <Link href={link} target='_blank'>
                <span className={styles.text} data-text={"Homepage"}>
                  Homepage
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className={styles.details__body2}>
          {tools?.map((tool, key) => {
            return (
              <figure key={key}>
                <Image src={tool} alt={`tools image`} width={100} height={100} />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
