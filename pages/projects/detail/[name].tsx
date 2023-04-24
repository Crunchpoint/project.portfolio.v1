import React from "react";
import Meta from "@/components/Meta";
import Head_cont from "@/components/projects/detail/Head_cont";
import Body_cont from "@/components/projects/detail/Body_cont";
import Other_work from "@/components/projects/detail/Other_work";
import { useRouter } from "next/router";

export default function Name() {
  const { query } = useRouter();

  const data = {
    name: query.name as string,
    id: query.id as string,
    title: query.title as string,
    img: query.img as string,
    color: query.color as string,
    href: query.href as string,
    tool: query.tool as string[],
    des: query.des as string,
    video: query.video as string,
    sort: query.sort as string,
    alt: query.alt as string,
  };

  return (
    <>
      <Meta title='Contact' name='portfolio' description="Johnny's portfolio" />
      <style jsx global>
        {`
          body {
            background-color: ${data?.color} !important;
            transition: all 0s !important;
          }
        `}
      </style>
      <Head_cont data={data} />
      <Body_cont data={data} />
      <Other_work data={data} />
    </>
  );
}
