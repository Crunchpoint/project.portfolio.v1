import React from "react";
import Image from "next/image";
import Spaceship from "@/public/img/index/rocket.webp";
import Spaceship_end from "@/public/img/index/rocket_end.webp";
import styles from "@/styles/index/Rocket.module.scss";
import { useParallax } from "react-scroll-parallax";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/components/context/Context";

export default function Rocket() {
  const { isReady, setIsReady } = useContext(MyContext);
  const [showRocket, setShowRocket] = useState(false);
  const { ref } = useParallax<HTMLImageElement>({
    translateX: [0, -400, "easeOutQuint"],
    translateY: [400, -20, "easeInQuint"],
    rotate: [0, -120, "easeInQuint"],
    onProgressChange: (value) => setIsReady(value > 0.98),
  });

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setShowRocket(true);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className={showRocket ? styles.rocket__active : styles.rocket}>
      <figure>
        <Image src={isReady ? Spaceship_end : Spaceship} alt='rocket' ref={ref} />
      </figure>
    </div>
  );
}
