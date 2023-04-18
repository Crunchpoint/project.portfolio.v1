import Link from "next/link";
import CustomCursor from "../cursor/CustomCursor";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/projects/Toy_item.module.scss";
import { StaticImageData } from "next/image";

interface Props {
  item: { title: string; description: string; view_case: string; image: StaticImageData };
}

export default function Toy_item({ item }: Props) {
  const [showItems, setShowItems] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const [position, setPosition] = useState({ x: -150, y: -150 });

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    let refCurrent = ref.current;
    refCurrent?.addEventListener("mousemove", onMouseMove);
    return () => {
      refCurrent?.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    // <Link href='/'>
    //     </Link>
    <ul className={styles.list__wrapper}>
      <li
        ref={ref}
        onMouseEnter={() => setShowItems(true)}
        onMouseLeave={() => {
          setShowItems(false);
        }}>
        <CustomCursor props={showItems} image={item.image} alt={item.description} cursor={position} />
        <div className={styles.items__wrapper}>
          <p className={styles.small__projects}>{item.title}</p>
          <p className={styles.description}>{item.description}</p>
          <p className={styles.view__case}>{item.view_case}</p>
        </div>
      </li>
    </ul>
  );
}
