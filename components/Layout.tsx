import styles from "@/styles/Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.bg__wrapper}>
        <Header />
        <div className={styles.stars__wrapper}>
          <div className={styles.stars1} />
          <div className={styles.stars2} />
          <div className={styles.stars3} />
        </div>
        <main className={styles.container}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
