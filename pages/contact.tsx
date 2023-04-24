import React from "react";
import Meta from "@/components/Meta";
import Main_text from "@/components/contact/Main_text";

export default function Contact(): JSX.Element {
  const mainText = "Contact";
  return (
    <>
      <Meta title='Contact' name='portfolio' description="Johnny's portfolio" />
      <Main_text text={mainText} />
    </>
  );
}
