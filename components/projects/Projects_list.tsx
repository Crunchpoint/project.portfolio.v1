import styles from "@/styles/projects/Projects_list.module.scss";
import Image from "next/image";
import AstronautImg from "@/public/img/index/among_red.png";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects_list() {
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      if (undefined !== self.selector) {
        const boxes = self.selector(".box");
        // forEach loop (method)
        // boxes.forEach((box: HTMLElement, key: number) => {
        //   gsap.to(box, {
        //     rotateY: -360,
        //     scrollTrigger: {
        //       trigger: box,
        //       start: "bottom bottom",
        //       // start: "bottom 90%",
        //       end: "+=1000",
        //       // end: "top 10%",
        //       scrub: true,
        //     },
        //   });
        // });

        gsap.to(".item_wrapper", {
          rotateY: -360,
          ease: "none",
          scrollTrigger: {
            trigger: ".item_wrapper",
            start: "top 40%",
            end: "bottom 0",
            scrub: true,
          },
        });
      }
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  });

  return (
    <section className={styles.container}>
      <div className={styles.allProjects} ref={main}>
        <div className={`item_wrapper ${styles.item__wrapper}`}>
          <div className={`box ${styles.box1} ${styles.box}`}>projects</div>
          <div className={`box ${styles.box2} ${styles.box}`}>projects </div>
          <div className={`box ${styles.box3} ${styles.box}`}>projects </div>
          <div className={`box ${styles.box4} ${styles.box}`}>projects </div>
          <div className={`box ${styles.box5} ${styles.box}`}>projects </div>
          <div className={`box ${styles.box6} ${styles.box}`}>projects </div>
          <div className={`box ${styles.box7} ${styles.box}`}>projects </div>
        </div>
      </div>
    </section>
  );
}
