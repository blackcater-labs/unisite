import { useLayoutEffect, useState } from "react";
import { Heading } from "@unisite/core-blog";

type Heading2 = Heading & {
  anchor: string;
};

export function useAnchorActive(headings: Heading2[]): Record<string, boolean> {
  const [actives, setActives] = useState({});

  useLayoutEffect(() => {
    if (!IntersectionObserver) return;

    const observers: IntersectionObserver[] = [];

    headings.forEach((heading) => {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log(heading.value, entries);

          if (entries[0] && entries[0].intersectionRatio >= 1) {
            setActives((state) => ({
              ...state,
              [`${heading.depth}-${heading.value}`]: true,
            }));
          } else {
            setActives((state) => ({
              ...state,
              [`${heading.depth}-${heading.value}`]: false,
            }));
          }
        },
        { threshold: 1.0 }
      );
      const $ele = document.querySelector(
        `a[href="#${encodeURIComponent(heading.anchor)}"]`
      );

      if (!$ele) return;

      observer.observe($ele);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [headings, setActives]);

  return actives;
}
