import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "@/styles/projects//detail/Other_projects_item.module.scss";
import CustomCursor_detail from "@/components/cursor/CustomCursor_detail";
import { useRouter } from "next/router";
import { MyContext } from "@/components/context/Context";

interface Props {
  item: {
    id: string;
    title: string;
    img: string;
    link: string;
    alt: string;
    description: string;
    href: string;
    video: string;
    color: string;
    tool: string[];
    sort: string;
  };
}

export default function Other_projects_item({ item }: Props) {
  const { isReady, setIsReady } = useContext(MyContext);
  const [showItems, setShowItems] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const [position, setPosition] = useState({ x: -150, y: -150 });
  const router = useRouter();

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

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: Props["item"]) {
    e.preventDefault();
    // setIsReady(!isReady);
    router.push({
      pathname: item.link,
      query: { id: item.id, img: item.img, title: item.title, color: item.color, tool: item.tool, href: item.href, des: item.description, video: item.video, sort: item.sort },
    });
  }

  return (
    <ul className={styles.list__wrapper}>
      <Link
        href='#'
        onClick={(e) => {
          handleClick(e, item);
        }}>
        <li
          ref={ref}
          onMouseEnter={() => setShowItems(true)}
          onMouseLeave={() => {
            setShowItems(false);
          }}>
          <CustomCursor_detail props={showItems} image={item.img} alt={item.title} cursor={position} />
          <div className={styles.items__wrapper}>
            <p className={styles.small__projects}>{item.title}</p>
            <p className={styles.description}>{item.sort}</p>
            <p className={styles.view__case}>view case</p>
          </div>
        </li>
      </Link>
    </ul>
  );
}
