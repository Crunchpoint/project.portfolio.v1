import React from "react";
import styles from "@/styles/projects/detail/Head_cont.module.scss";
import Main_text from "./Main_text";
import Main_img from "./Main_img";

interface Props {
  data: {
    name: string;
    id: string;
    title: string;
    img: string;
    href: string;
    tool: string[];
  };
}

export default function Head_cont({ data }: Props) {
  const text = `Projcets - ${data?.title}`;
  const href = data?.href;
  const tool = data?.tool;
  const img = data?.img;

  return (
    <section className={styles.container}>
      <Main_text link={href} text={text} tool={tool} />
      <Main_img img={img} href={href} />
    </section>
  );
}
