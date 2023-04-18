import styles from "@/styles/projects/Projects_list.module.scss";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Airplane from "@/components/projects/Airplane";
import Project1 from "@/public/img/projects/baro2.jpg";
import Project2 from "@/public/img/projects/eclipse2.jpg";
import Project3 from "@/public/img/projects/event2.jpg";
import Project4 from "@/public/img/projects/ghibli2.jpg";
import { Lobster } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Projects_list() {
  const [showItems, setShowItems] = useState(false);
  const main = useRef(null);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setShowItems(true);
    }, 800);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      if (undefined !== self.selector) {
        // const boxes = self.selector(".box");
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
        // });`

        // const perspectiveOrigin = window.getComputedStyle(main.current).getPropertyValue("perspective-origin");

        // console.log(perspectiveOrigin);

        // gsap.to(main.current, {
        //   perspectiveOrigin: "center 50%",
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: main.current,
        //     start: "top 30%",
        //     end: "+=800",
        //     scrub: true,
        //   },
        // });

        gsap.to(".item_wrapper", {
          rotateY: -240,
          transition: "transform 0.2s linear",
          ease: "none",
          scrollTrigger: {
            trigger: ".item_wrapper",
            start: "top 60% ",
            end: "bottom 40%",
            scrub: true,
            // markers: true,
          },
        });
      }
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  });

  return (
    <section className={showItems ? styles.container__active : styles.container}>
      <div className={styles.allProjects} ref={main}>
        <Airplane />
        <div className={`item_wrapper ${styles.item__wrapper}`}>
          <motion.div className={`box ${styles.box1} ${styles.box}`}>
            <figure>
              <Link href='/'>
                <figcaption className={lobster.className}>Barovier</figcaption>
                <Image src={Project1} alt='project1' />
                <figcaption>VIEW PROJECT</figcaption>
              </Link>
            </figure>
          </motion.div>
          <motion.div className={`box ${styles.box2} ${styles.box}`}>
            <figure>
              <Link href='/'>
                <figcaption className={lobster.className}>Eclipse</figcaption>
                <Image src={Project2} alt='project2' />
                <figcaption>VIEW PROJECT</figcaption>
              </Link>
            </figure>
          </motion.div>
          <motion.div className={`box ${styles.box3} ${styles.box}`}>
            <figure>
              <Link href='/'>
                <figcaption className={lobster.className}>Seoul Event</figcaption>
                <Image src={Project3} alt='project3' />
                <figcaption>VIEW PROJECT</figcaption>
              </Link>
            </figure>
          </motion.div>
          <motion.div className={`box ${styles.box4} ${styles.box}`}>
            <figure>
              <Link href='/'>
                <figcaption className={lobster.className}>Ghibli</figcaption>
                <Image src={Project4} alt='project4' />
                <figcaption>VIEW PROJECT</figcaption>
              </Link>
            </figure>
          </motion.div>
          <motion.div className={`box ${styles.box5} ${styles.box}`}>
            <p>Stay tuned for more projects</p>
          </motion.div>
          <motion.div className={`box ${styles.box6} ${styles.box}`}>
            <p>Stay tuned for more projects</p>
          </motion.div>
          <motion.div className={`box ${styles.box7} ${styles.box}`}>
            <p>Stay tuned for more projects</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
