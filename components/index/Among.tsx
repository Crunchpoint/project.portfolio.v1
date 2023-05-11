import React, { useEffect, useState } from "react";
import AmongImg from "@/public/img/index/among_red.png";
import AmongImg2 from "@/public/img/index/among_lime.png";
import AmongImg3 from "@/public/img/index/among_yello.png";
import styles from "@/styles/index/Among.module.scss";
import Image, { StaticImageData } from "next/image";

export default function Among(): JSX.Element {
  const [img, setImg] = useState<StaticImageData>(AmongImg as StaticImageData);

  useEffect(() => {
    let timer = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      switch (random) {
        case 0:
          setImg(AmongImg);
          break;
        case 1:
          setImg(AmongImg2);
          break;
        case 2:
          setImg(AmongImg3);
          break;
      }
    }, 30000);
    return () => {
      // console.log("among us component unmounted");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.among}>
      <figure>
        <Image src={img} alt='among us red guy' />
      </figure>
    </div>
  );
}
