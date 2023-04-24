import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/projects/detail/Main_img.module.scss";
import { MyContext } from "@/components/context/Context";
import { gsap } from "gsap";
import { useRouter } from "next/router";

interface Props {
  img: string;
  href: string;
}

export default function Main_img({ img, href }: Props): JSX.Element {
  const { mainTextHeight } = useContext(MyContext);
  const [isImageRdy, setIsImageRdy] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".figure", {
      y: `${mainTextHeight}`,
      duration: 0.75,
      ease: "back.out(2)",
      onComplete: () => {
        setTimeout(() => {
          gsap.to(".figure", {
            y: 0,
            duration: 0,
            ease: "none",
          });
        }, 0);
        setIsImageRdy(true);
      },
    });

    return () => {
      setIsImageRdy(false);
    };
  }, [mainTextHeight, router]);

  return (
    <div className={styles.head__image} data-ready={isImageRdy}>
      <figure className={`figure ${styles.image__inner}`}>
        {img && href ? (
          // <Link href={href} target='_blank'>
          // </Link>
          <Image src={img} alt='Project image' width={1920} height={1080} />
        ) : null}
      </figure>
    </div>
  );
}
