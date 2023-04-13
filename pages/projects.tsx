import React from "react";
import Projects_list from "@/components/projects/Projects_list";
import Main_text from "@/components/projects/Main_text";
import Test from "@/components/projects/test";
import Meta from "@/components/Meta";
export default function Projects(): JSX.Element {
  const mainText = "All \nProjects";

  return (
    <>
      <Meta title='Project' name='portfolio' description="Johnny's portfolio" />
      <Main_text text={mainText} />
      <Projects_list />
      {/* <Test /> */}
    </>
  );
}
