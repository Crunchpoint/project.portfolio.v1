import React, { useRef } from "react";
import styles from "@/styles/CustomCursor.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  props: boolean;
  image: string;
  cursor: { x: number; y: number };
  alt: string;
  // fn: (value: any) => void;
};

export default function CustomCursor_detail({ props, image, alt, cursor }: Props) {
  const ref = useRef<HTMLImageElement>(null);

  // fn(ref.current?.offsetTop);

  return (
    <div
      className={styles.cursor}
      style={{
        transform: `translate3d(calc(${cursor.x}px + (-50%)), calc(${cursor.y}px + (-50%)), 0)`,
      }}>
      <Image ref={ref} src={image} alt={alt} className={styles.cursor__img} data-mouse={props} width={600} height={600} />
    </div>
  );
}
