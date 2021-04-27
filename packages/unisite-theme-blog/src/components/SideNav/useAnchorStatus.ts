import { useEffect, useState } from "react";
import { useWindowScroll, useThrottle, useWindowSize } from "react-use";

import type { Heading2 } from "./type";

export function useAnchorStatus(
  headings: Heading2[],
  offset: number = 45
): Record<string, boolean> {
  const [actives, setActives] = useState({});
  const { y } = useWindowScroll();
  const { height } = useWindowSize();
  const tY = useThrottle(y, 300);
  const [scrollTops, setScrollTops] = useState<[number, number][]>([]);

  useEffect(() => {
    const current = document.documentElement.scrollTop;

    setScrollTops(
      headings.map((heading) => {
        const $anchor = document.querySelector(`a[href="${heading.hash}"]`)!;
        if (!$anchor) return [0, 0];
        const anchorRect = $anchor.getBoundingClientRect();
        return [
          current + anchorRect.y - height,
          current + anchorRect.y - offset,
        ];
      })
    );
  }, [height, headings, offset]);

  useEffect(() => {
    let i = 0;
    for (; i < scrollTops.length; i++) {
      const [cTop, cBottom] = scrollTops[i]!;
      if (tY < cTop) {
        i--;
        break;
      } else if (cTop <= tY && tY <= cBottom) {
        break;
      }
    }

    i = Math.min(i, scrollTops.length - 1);

    if (i < 0 || !headings[i]) {
      setActives({});
    } else {
      setActives({ [headings[i]!.hash]: true });
    }
  }, [tY, scrollTops, headings]);

  return actives;
}
