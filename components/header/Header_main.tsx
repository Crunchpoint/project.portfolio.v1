import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import { motion } from "framer-motion";
import styles from "@/styles/header/Header_main.module.scss";

export default function Header_main() {
  const { isOpen, setIsOpen } = useContext(MyContext);

  function navOpen() {
    setIsOpen(!isOpen);
  }

  const variants = {
    open: { filter: "blur(0.25em)", opacity: 0, transition: { duration: 0.65 } },
    closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.65 } },
  };

  return (
    <div className={styles.header__main}>
      <Link href='/' onClick={() => setIsOpen(false)}>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='140' height='100%' viewBox='0 0 1000 446' preserveAspectRatio='xMidYMid meet' className={styles.header__logo}>
          <g transform='matrix(1,0,0,1,-0.6060490628241837,-0.36933011422502204)'>
            <svg viewBox='0 0 396 177' data-background-color='#ffffff' preserveAspectRatio='xMidYMid meet' height='446' width='1000' xmlns='http://www.w3.org/2000/svg'>
              <g id='tight-bounds' transform='matrix(1,0,0,1,0.23999542887838743,0.14657324115093218)'>
                <svg viewBox='0 0 395.52 176.70684929643377' height='176.70684929643377' width='395.52'>
                  <g>
                    <svg viewBox='0 0 553.3036460628762 247.2' height='176.70684929643377' width='395.52'>
                      <g>
                        <svg viewBox='0 0 305.89966555183946 247.2' height='247.2' width='305.89966555183946'>
                          <g id='textblocktransform'>
                            <svg viewBox='0 0 305.89966555183946 247.2' height='247.2' width='305.89966555183946' id='textblock'>
                              <g>
                                <svg viewBox='0 0 305.89966555183946 247.2' height='247.2' width='305.89966555183946'>
                                  <g transform='matrix(1,0,0,1,0,0)'>
                                    <svg width='305.89966555183946' viewBox='-1.9300000667572021 -38.15999984741211 63.22999954223633 51.099998474121094' height='247.2' data-palette-color='#ffffff'>
                                      <path
                                        d='M1.07 12.94L-1.93 6.32Q-0.24 5.3 0.96 4.17 2.17 3.05 2.95 1.7 3.74 0.34 4.1-1.33 4.47-3 4.47-5.13L4.47-5.13 4.47-38.16 12.21-38.16 12.21-6.52Q12.21-3.98 11.99-1.89 11.77 0.2 11.27 1.94 10.77 3.69 9.92 5.15 9.08 6.62 7.85 7.93 6.62 9.25 4.94 10.47 3.27 11.69 1.07 12.94L1.07 12.94ZM22.07 0L22.07-38.16 29.81-38.16 29.81-28.2 53.54-28.2 53.54-38.16 61.3-38.16 61.3 0 53.54 0 53.54-21.58 29.81-21.58 29.81 0 22.07 0Z'
                                        opacity='1'
                                        transform='matrix(1,0,0,1,0,0)'
                                        fill='#ffffff'
                                        data-fill-palette-color='primary'></path>
                                    </svg>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                        </svg>
                      </g>
                      <g transform='matrix(1,0,0,1,364.2576527518395,40.32458523171955)'>
                        <svg viewBox='0 0 189.04599331103677 166.55082953656088' height='166.55082953656088' width='189.04599331103677'>
                          <g>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              version='1.1'
                              x='0'
                              y='0'
                              viewBox='6.300000190734863 11.5 87.39999389648438 77'
                              height='166.55082953656088'
                              width='189.04599331103677'
                              data-fill-palette-color='accent'
                              id='icon-0'>
                              <path
                                d='M72.3 12.3L72.3 12.3 72.3 12.3l-0.4-0.8H28.2L6.3 50l21.8 38.5h43.7L93.7 50 72.3 12.3zM33.3 25.3L9.9 47.7l18.6-32.8L33.3 25.3zM70.7 14.8l6.4 35.7L36.9 25.8 70.7 14.8zM35.5 27.3l41 25.2-41 23.3V27.3zM77 54.5l-7.2 30.8-32.6-8.1L77 54.5zM33.5 75L9.9 50.5l23.6-22.7V75zM33.2 77.6l-4.6 7.7L11.5 55.1 33.2 77.6zM35 78.6l31.4 7.9H30.2L35 78.6zM79.3 53.3l11.6-2.5L72.1 84 79.3 53.3zM90.7 48.9l-11.4 2.5-5.9-33.1L90.7 48.9zM35 24.3l-5-10.8h38.2L35 24.3z'
                                fill='#ffffff'
                                data-fill-palette-color='accent'></path>
                            </svg>
                          </g>
                        </svg>
                      </g>
                    </svg>
                  </g>
                  <defs></defs>
                </svg>
                <rect width='395.52' height='176.70684929643377' fill='none' stroke='none' visibility='hidden'></rect>
              </g>
            </svg>
          </g>
        </svg>
      </Link>
      <div className={styles.header__right}>
        <div className={styles.nav__trigger} onClick={() => navOpen()}>
          <motion.span animate={isOpen ? "open" : "closed"} variants={variants}>
            Menu
          </motion.span>
          <motion.span animate={isOpen ? "closed" : "open"} variants={variants}>
            Close
          </motion.span>
        </div>
      </div>
    </div>
  );
}
