import React from "react";
import Projects_list from "@/components/projects/Projects_list";
import Main_text from "@/components/projects/Main_text";
import Toy_projects from "@/components/projects/Toy_projects";
import Meta from "@/components/Meta";
import styles from "@/styles/projects/Projects.module.scss";
export default function Projects(): JSX.Element {
  const mainText = "All \nProjects";

  return (
    <>
      <Meta title='Project' name='portfolio' description="Johnny's portfolio" />
      <Main_text text={mainText} />
      <Projects_list />
      <Toy_projects />
    </>
  );
}
