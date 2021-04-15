import { useLayoutEffect, useState } from "react";

import type { Heading2 } from "./type";

export function useAnchorStatus(headings: Heading2[]): Record<string, boolean> {
  const [actives, setActives] = useState({});

  useLayoutEffect(() => {
    if (!IntersectionObserver) return;

    const n = headings.length;
    const observers: (IntersectionObserver | null)[] = new Array(n).fill(null);

    for (let i = 0; i < n; i++) {
      const heading = headings[i]!;
      const $ele = document.querySelector(`a[href="${heading.hash}"]`);

      if (!$ele) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0]) return;
          const { intersectionRatio } = entries[0];

          if (intersectionRatio >= 1) {
            setActives((state) => ({
              ...state,
              [heading.hash]: true,
            }));
          } else {
            setActives((state) => ({
              ...state,
              [heading.hash]: false,
            }));
          }
        },
        { threshold: [1] }
      );

      observer.observe($ele);

      observers[i] = observer;
    }

    return () => {
      observers.forEach((observer) => observer!.disconnect());
    };
  }, [headings, setActives]);

  return actives;
}
