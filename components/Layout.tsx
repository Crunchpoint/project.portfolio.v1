import styles from "@/styles/Layout.module.scss";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href='/about'>어바웃</Link>
          </li>
          <li className={styles.nav__item}>스킬</li>
          <li className={styles.nav__item}>프로젝트</li>
          <li className={styles.nav__item}>컨택트</li>
        </ul>
      </nav>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Layout;
