import React, { useContext, useEffect, useRef } from "react";
import styles from "@/styles/projects/Projects_list_items.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { Lobster } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/router";
import { MyContext } from "@/components/context/Context";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

interface Props {
  parent: React.RefObject<HTMLDivElement>;
  pageTransition: (id: number) => void;
}

interface Item {
  id: number;
  title: string;
  img: string;
  alt: string;
  className: string;
  link: string;
  href: string;
  video: string;
  color: string;
  tool: string[];
  description: string;
  sort: string;
}

export default function Projects_list_items({ parent, pageTransition }: Props): JSX.Element {
  const { projectData }: { projectData: Item[] } = useContext(MyContext);
  const trigger = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context((self) => {
      if (undefined !== self.selector) {
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
    }, parent); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  });

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: Item) {
    e.preventDefault();
    if (!trigger.current) {
      trigger.current = true;

      setTimeout(() => {
        router.push({
          pathname: item.link,
          query: { id: item.id, img: item.img, title: item.title, color: item.color, tool: item.tool, href: item.href, des: item.description, video: item.video, sort: item.sort },
        });
      }, 1000);

      pageTransition(item.id);
    }
  }

  return (
    <div className={`item_wrapper ${styles.item__wrapper}`}>
      {projectData?.map((item) => {
        return (
          <motion.div className={`box ${styles[`${item.className}`]} ${styles.box}`} key={item.id}>
            <figure className={styles.img__figure}>
              {/* edit: Data-link is only to be used for empty projects. Remove it once the number of projects exceeds 7.*/}
              <Link className={styles.link} href='#' data-link={item.link} onClick={(e) => handleClick(e, item)}>
                <figcaption className={`${lobster.className} ${styles.caption}`}>{item.title}</figcaption>
                <Image src={item.img} alt={item.title} className={styles.image} width={1920} height={1080} />
                <figcaption className={styles.caption}>VIEW PROJECT</figcaption>
              </Link>
            </figure>
          </motion.div>
        );
      })}
    </div>
  );
}
