import React, { useState } from "react";
import styles from "@/styles/index/About_text.module.scss";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Image from "next/image";
import YogaImg from "@/public/img/index/yoga.gif";
import FlowerImg from "@/public/img/index/website.gif";
import TogetherImg from "@/public/img/index/together4.gif";

interface About_textProps {
  text: string;
}
export default function About_text({ text }: About_textProps) {
  const [isDone, setIsDone] = useState<React.SetStateAction<boolean>>(false);
  const mainText = text;
  const words = mainText.split("\n");
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div className={styles.container} onViewportLeave={() => setIsDone(false)}>
      <Parallax speed={25}>
        <motion.figure className={styles.image__Wrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
          <Image src={YogaImg} alt='developer' />
          <Image src={FlowerImg} alt='flower' />
          <Image src={TogetherImg} alt='developer' />
        </motion.figure>
        {words.map((word, index) => {
          return (
            <motion.span
              key={index}
              className={styles.text__container__p}
              variants={variants}
              initial='hidden'
              whileInView='visible'
              onAnimationStart={() => setIsDone(true)}
              data-isdone={isDone}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          );
        })}
      </Parallax>
    </motion.div>
  );
}
