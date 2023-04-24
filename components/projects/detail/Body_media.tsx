import React from "react";
import styles from "@/styles/projects/detail/Body_media.module.scss";

interface Props {
  video: string;
}

export default function Body_media({ video }: Props) {
  return (
    <div className={styles.media}>
      <div className={styles.media__inner}>{video && <video className={styles.video} src={video} autoPlay muted loop playsInline preload='none' />}</div>
    </div>
  );
}
