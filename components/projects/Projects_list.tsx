import styles from "@/styles/projects/Projects_list.module.scss";
import styles2 from "@/styles/projects/Projects_list_items.module.scss";
import { useEffect, useRef, useState } from "react";
import Airplane from "@/components/projects/Airplane";
import Projects_list_items from "./Projects_list_items";

export default function Projects_list() {
  const [showItems, setShowItems] = useState(false);
  const [clicked, setClicked] = useState<{ id: number; clicked: boolean }>({ id: 0, clicked: false });

  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setShowItems(true);
    }, 800);
    return () => clearTimeout(timeOut);
  }, []);

  function pageTransition(id: number) {
    window.scrollTo(0, 0);
    setClicked({ id: id, clicked: true });
  }

  return (
    <section className={showItems ? styles.container__active : styles.container}>
      {clicked.clicked && (
        <style jsx global>
          {`
            .${styles.container__active} {
              position: fixed;
              top: 0;
              left: 0;
              margin: 0 !important;
              .${styles2.item__wrapper} {
                transform: translateY(0) !important;
                transform-style: flat;
                .${styles2.box} {
                  opacity: 0;
                  transition: opacity 0s;
                  .${styles2.img__figure} {
                    width: 100vw;
                    height: 100vh;
                    max-width: 100vw;
                    animation: test 0.5s linear forwards;
                    .${styles2.caption} {
                      display: none;
                    }
                  }
                }
                .${styles2[`box${clicked.id}`]} {
                  opacity: 1;
                  top: 0;
                  transform: rotateZ(0deg);
                  .${styles2.image} {
                  }
                }
              }
            }
            @keyframes test {
              0% {
                transform: scale(0);
              }
              100% {
                transform: scale(1);
              }
            }
          `}
        </style>
      )}
      <div className={styles.allProjects} ref={main}>
        <Airplane />
        <Projects_list_items parent={main} pageTransition={pageTransition} />
      </div>
    </section>
  );
}
