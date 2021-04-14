import React, { useCallback, useMemo } from "react";
import cls from "classnames";
import GithubSlugger from "github-slugger";
import type { Heading } from "@unisite/core-blog";

import type { FC2 } from "../../types";
import { useAnchorActive } from "./useAnchorActive";

type Heading2 = Heading & {
  anchor: string;
};

type SideNavProps = {
  className?: string;
  headings: Heading[];
};

type SideNavFC = FC2<SideNavProps>;

const SideNav: SideNavFC = ({ className, headings }) => {
  const isMultiH1 = useMemo(
    () => headings.filter((heading) => heading.depth === 1).length > 1,
    [headings]
  );
  const items: Heading2[] = useMemo(() => {
    const slugger = new GithubSlugger();
    const list: Heading[] = isMultiH1
      ? headings.filter((heading) => heading.depth < 3)
      : headings.filter((heading) => heading.depth > 1 && heading.depth < 4);

    return list.map((heading) => ({
      ...heading,
      anchor: slugger.slug(heading.value),
    }));
  }, [isMultiH1, headings]);
  const depth = isMultiH1 ? 1 : 2;
  const actives = useAnchorActive(items);
  const handleJumpTo = useCallback((heading: Heading2) => {
    const $ele = document.querySelector(
      `a[href="#${encodeURIComponent(heading.anchor)}"]`
    );

    if (!$ele) return;

    const offsetTop = $ele.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: offsetTop - 60,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={cls([
        className,
        "max-h-(screen-12) flex flex-col overflow-hidden",
      ])}
    >
      <div className="py-4 text-gray-900 font-bold">导航</div>
      <div className="mb-4 flex-1 overflow-y-auto">
        {items.map((item) => (
          <div
            key={`${item.depth}-${item.value}`}
            className={cls([
              "py-1 cursor-pointer text-sm text-gray-500 hover:text-gray-900 hover:font-medium",
              {
                "pl-3": item.depth === depth + 1,
                "pl-6": item.depth === depth + 2,
              },
              actives[`${item.depth}-${item.value}`] ? "text-gray-900" : "",
            ])}
            onClick={() => handleJumpTo(item)}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export type { SideNavProps };
export default SideNav;
