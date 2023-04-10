import React from "react";
import Link from "next/link";
import styles from "@/styles/header/Header_inner.module.scss";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "About" },
  // { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialItems: NavItem[] = [
  { href: "https://github.com/Crunchpoint?tab=repositories", label: "Portfolio" },
  { href: "https://github.com/Crunchpoint?tab=repositories", label: "Team project - Ghibli" },
  { href: "https://github.com/Crunchpoint?tab=repositories", label: "Seoul Event Information" },
  { href: "https://github.com/Crunchpoint?tab=repositories", label: "Clone Coding - Barovier" },
];

function Header_inner() {
  const { isOpen, setIsOpen } = useContext(MyContext);
  const router = useRouter();

  const variants = {
    open: (key: number) => ({ y: "105%", transition: { duration: 0.2 } }),
    closed: (key: number) => ({ y: 0, transition: { duration: 0.2, delay: (navItems.length - key) * 0.15 } }),

    open2: (key: number) => ({ y: "-105%", transition: { duration: 0.2 } }),
    closed2: (key: number) => ({ y: 0, transition: { duration: 0.2, delay: key * 0.15 } }),
  };

  return (
    <div className={isOpen ? styles.header__inner__active : styles.header__inner}>
      <nav className={isOpen ? styles.nav__open : styles.nav}>
        <ul className={styles.nav__list}>
          {navItems.map((item, key) => (
            <motion.li key={item.label} className={styles.nav__item}>
              <motion.div className={styles.text__container} animate={isOpen ? "closed" : "open"} variants={variants} custom={key}>
                <Link href={item.href} onClick={() => setIsOpen(!isOpen)}>
                  <span className={router.pathname === item.href ? styles.text__active : styles.text} data-text={item.label}>
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className={isOpen ? styles.social__open : styles.social}>
        <p className={isOpen ? styles.latest__active : styles.latest}>Latest work - link to github</p>
        <ul>
          {socialItems.map((item, key) => (
            <motion.li key={item.label} className={styles.social__item}>
              <motion.div className={styles.text__container} animate={isOpen ? "closed2" : "open2"} variants={variants} custom={key}>
                <Link href={item.href} onClick={() => setIsOpen(!isOpen)}>
                  <span data-text={item.label}>{item.label}</span>
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header_inner;
