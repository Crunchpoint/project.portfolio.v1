import React from "react";
import styles from "@/styles/index/About.module.scss";
import About_text from "@/components/index/About_text";
import About_link from "@/components/index/About_link";
import Hero_image from "@/components/index/Parallax_image";
import Astronaut from "@/public/img/astronaut.webp";

export default function About_me() {
  const aboutMe = `I'm a creative <span className={styles.text}>frontend developer</span> with a passion \nfor creating <span className={styles.text}>beautiful and intuitive</span> websites. \nSo come on in, take a look around, and\nlet's create something amazing <span className={styles.text}>together!</span>`;

  return (
    <section className={styles.about}>
      <Hero_image image={Astronaut} alt={"astronaut"} translateY={[-50, 300]} item={"styles2"} />
      <About_text text={aboutMe} />
      <About_link />
    </section>
  );
}
