import React from "react";
import styles from "@/styles/projects/detail/Body_cont.module.scss";
import Body_text from "./Body_text";
import Body_media from "./Body_media";

interface Props {
  data: {
    name: string;
    id: string;
    title: string;
    img: string;
    href: string;
    video: string;
    tool: string[];
    des: string;
  };
}

export default function Body_cont({ data }: Props): JSX.Element {
  const description = data?.des;
  const video = data?.video;

  return (
    <section className={styles.container}>
      <Body_text description={description} />
      <Body_media video={video} />
    </section>
  );
}
