import { useEffect, useState } from "react";
import { navigationHeight } from "./constants";

export const useScrollTo = () => {
  const [height, setHeight] = useState(navigationHeight);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 480px)")) {
        setHeight(56);
      } else {
        setHeight(navigationHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToEl = (sectionId: string) => {
    // e.preventDefault();
    // const hash = e.target.hash;
    const offsetTop = document?.querySelector<HTMLElement>(`#${sectionId}`)?.offsetTop - height;

    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return { scrollToEl };
};
