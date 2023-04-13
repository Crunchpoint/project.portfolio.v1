import { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function Test() {
  useEffect(() => {
    gsap.set(".astronaut", { scale: 0.5, autoAlpha: 1 });

    gsap.to(".astronaut", {
      duration: 5,
      ease: "power1.inOut",
      immediateRender: true,
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90,
      },
    });
  }, []);

  return (
    <>
      <svg id='motionPath' viewBox='-20 0 557 190'>
        <path id='path' fill='none' d='M8,102 C15,83 58,25 131,24 206,24 233,63 259,91 292,125 328,155 377,155 464,155 497,97 504,74' />
        <circle className='astronaut' cx='0' cy='0' r='10' />
      </svg>
      <style global jsx>
        {`
          #motionPath {
            overflow: visible;
            height: 100%;
            max-width: 100%;
          }

          #motionPath path {
            strokewidth: 2;
            stroke: gray;
          }

          #motionPath .astronaut {
            visibility: hidden;
          }
        `}
      </style>
    </>
  );
}
