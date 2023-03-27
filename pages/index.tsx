import styles from "@/styles/Home.module.scss";
import Meta from "@/components/Meta";

export default function Home() {
  return (
    <>
      <Meta title='Home' name='description' description='This is the home page' />
      <div className={styles.home}>
        <p>잠깐만 폰트 테스트</p>
      </div>
    </>
  );
}
