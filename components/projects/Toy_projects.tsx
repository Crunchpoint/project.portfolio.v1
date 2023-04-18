import React from "react";
import styles from "@/styles/projects/Toy_projects.module.scss";
import { Indie_Flower } from "next/font/google";
import { motion } from "framer-motion";
import ToyImg_1 from "@/public/img/projects/baro2.jpg";
import ToyImg_2 from "@/public/img/projects/event2.jpg";
import ToyImg_3 from "@/public/img/projects/ghibli2.jpg";
import Toy_item from "./Toy_item";

const indie = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Toy_projects(): JSX.Element {
  const toyArry = [
    {
      title: "upcoming update! ",
      description: "description",
      view_case: "view case",
      image: ToyImg_1,
    },
    {
      title: "upcoming update! ",
      description: "description",
      view_case: "view case",
      image: ToyImg_2,
    },
    {
      title: "upcoming update! ",
      description: "description",
      view_case: "view case",
      image: ToyImg_3,
    },
  ];

  return (
    <motion.section className={styles.toy} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} viewport={{ margin: "0px 0px -50% 0px" }}>
      <h2 className={styles.title}>
        Tiny works&nbsp;&nbsp;<span className={indie.className}>for fun!</span>
      </h2>
      <div className={styles.list}>
        {toyArry.map((item, index) => {
          return <Toy_item key={index} item={item} />;
        })}
      </div>
    </motion.section>
  );
}
