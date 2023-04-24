import React, { useEffect, useState } from "react";
import styles from "@/styles/projects//detail/Other_projects.module.scss";
import { Indie_Flower } from "next/font/google";
import { motion } from "framer-motion";
import Other_projects_item from "./Other_projects_item";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";

const indie = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
});

interface Item {
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

interface ProjectData {
  id: string;
  title: string;
  img: string;
  alt: string;
  description: string;
  href: string;
  video: string;
  color: string;
  tool: string[];
  sort: string;
  link: string;
}

export default function Other_projects({ data }: Item): JSX.Element {
  const { projectData }: { projectData: ProjectData[] } = useContext(MyContext);
  const [filteredData, setFilteredData] = useState<ProjectData[]>();

  useEffect(() => {
    let filter = projectData?.filter((item) => {
      return item.id.toString() !== data.id && item.link !== "";
    });
    setFilteredData(filter);
  }, [data, projectData]);

  return (
    <motion.section className={styles.toy} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} viewport={{ margin: "0px 0px -50% 0px" }}>
      <h2 className={styles.title}>
        Other Projects&nbsp;&nbsp;
        {/* <span className={indie.className}>for fun!</span> */}
      </h2>
      <div className={styles.list}>
        {filteredData?.map((item, index) => {
          return <Other_projects_item key={index} item={item} />;
        })}
      </div>
    </motion.section>
  );
}
