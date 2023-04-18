import React from "react";
import Meta from "@/components/Meta";
import Main_text from "@/components/contact/Main_text";
import Canvas from "@/components/contact/Canvas";
import styles from "@/styles/contact/Contact.module.scss";

export default function Contact(): JSX.Element {
  const mainText = "Contact";
  return (
    <>
      <Meta title='Contact' name='portfolio' description="Johnny's portfolio" />
      <Main_text text={mainText} />
      {/* <Canvas /> */}
    </>
  );
}
