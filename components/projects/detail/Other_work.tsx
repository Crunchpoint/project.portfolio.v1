import React from "react";
import styles from "@/styles/projects/detail/Other_work.module.scss";
import Other_projects from "./Other_projects";
import Other_projects_item from "./Other_projects_item";

interface Props {
  data: {
    id: string;
    title: string;
    img: string;
    alt: string;
    des: string;
    href: string;
    video: string;
    color: string;
    tool: string[];
    sort: string;
  };
}

export default function Other_work({ data }: Props): JSX.Element {
  return (
    <section className={styles.container}>
      <Other_projects data={data} />
    </section>
  );
}
