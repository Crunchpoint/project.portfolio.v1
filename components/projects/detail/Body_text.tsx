import React, { useEffect } from "react";
import styles from "@/styles/projects/detail/Body_text.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Body_text({ description }: { description: string }): JSX.Element {
  useEffect(() => {
    gsap.to(".side__text", {
      opacity: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".side__text",
        start: "top 80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={`side__text ${styles.side__text}`}>
      <div className={styles.text__inner}>
        <p className={`text ${styles.text}`}>{description}</p>
      </div>
    </div>
  );
}
