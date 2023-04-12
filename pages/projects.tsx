import React from "react";
import Projects_list from "@/components/projects/Projects_list";
import Meta from "@/components/Meta";
export default function Projects(): JSX.Element {
  return (
    <>
      <Meta title='Project' name='portfolio' description="Johnny's portfolio" />
      <Projects_list />
    </>
  );
}
