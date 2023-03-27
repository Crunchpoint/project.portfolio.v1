import styles from "@/styles/Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    //header or navbar
    <div className={styles.container}>{children}</div>
    // footer
  );
};

export default Layout;
