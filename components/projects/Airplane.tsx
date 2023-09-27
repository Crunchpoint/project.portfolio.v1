import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import styles from "@/styles/projects/Airplane.module.scss";
import Airplane from "@/public/img/projects/airplane.png";
import Image from "next/image";
import Link from "next/link";
import { Indie_Flower } from "next/font/google";

const indie = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
});

gsap.registerPlugin(MotionPathPlugin);

export default function Test() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); // calculate viewport width
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); // calculate viewport height
    const path = [
      { x: 0, y: 0 },
      { x: vw * 0.05, y: vh * 0.26 * 1.65 },
      { x: vw * 0.078, y: vh * 0.52 * 1.65 },
      { x: vw * 0.156, y: vh * 0.78 * 1.65 },
      { x: vw * 0.26, y: vh * 1.04 * 1.65 },
      { x: vw * 0.364, y: vh * 1.3 * 1.65 },
      { x: vw * 0.468, y: vh * 1.56 * 1.65 },
      { x: vw * 1.094, y: vh * 1.56 * 1.65 },
      { x: vw * 0.364, y: vh * 1.412 * 1.65 },
      { x: vw * 0.468, y: vh * 2.24 * 1.65 },
      { x: vw * 0.572, y: vh * 2.6 * 1.65 },
      { x: vw * 0.728, y: vh * 2.956 * 1.65 },
      { x: vw * 0.884, y: vh * 3.312 * 1.65 },
      { x: vw * 1.204, y: vh * 3.52 * 1.65 },
    ]; // adjust the motion path values based on viewport width
    gsap.set(".airplane", { scale: vw * 0.00027 });
    gsap.to(".airplane", {
      scrollTrigger: {
        trigger: ".airplane",
        start: "0",
        end: `+=${vh * 2.1}`,
        scrub: true,
      },
      onUpdate: () => {
        setIsMounted(false);
      },
      onComplete: () => {
        setIsMounted(true);
      },
      ease: "none",
      immediateRender: true,
      motionPath: {
        path: path,
        offsetX: -vw * 0.416,
        offsetY: -vh * 1.04 * 2.2,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
  }, []);

  return (
    <div className={styles.plane__wrapper}>
      <svg id='motionPath' className={styles.motionPath} viewBox='-20 0 557 190'>
        <path id='path' className={styles.path} fill='none' d='M8,102 C15,83 58,25 131,24 206,24 233,63 259,91 292,125 328,155 377,155 464,155 497,97 504,74' />
      </svg>
      <figure className={`airplane ${styles.plane}`}>
        <Link href='mailto:mycoside@gmail.com'>
          <figcaption className={indie.className} data-complete={isMounted}>
            Contact Me!
          </figcaption>
        </Link>
        <Image src={Airplane} alt='airplane' className={styles.airplane} />
      </figure>
    </div>
  );
}
