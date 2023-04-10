import styles from "@/styles/Layout.module.scss";
import Header from "./header/Header";
import Stars from "./Star";
import Sky from "./Sky";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <div className={styles.bg__wrapper} data-theme={router.pathname}>
        <Header />
        {router.pathname === "/" ? <Stars /> : router.pathname === "/projects" ? <Sky /> : null}
        <main className={styles.container}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
