import React from "react";
import Hero_image from "@/components/index/Parallax_image";
import Text_hello from "@/components/index/Text_hello";
import About from "@/components/index/About";
import Meta from "@/components/Meta";
import EarthImg from "@/public/img/earth2.webp";
import Rocket from "@/components/index/Rocket";

export default function Home(): JSX.Element {
  const mainText = "Hello!  \nI am JiHoon.  \nWelcome to my world!";

  return (
    <>
      <Meta title='Home' name='portfolio' description="Johnny's portfolio" />
      <Hero_image image={EarthImg} alt={"main visual image"} translateY={[-30, 70]} item={"styles"} />
      <Rocket />
      <Text_hello text={mainText} />
      <About />
    </>
  );
}
