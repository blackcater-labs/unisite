import React, { useCallback, useMemo } from "react";
import cls from "classnames";

import type { Heading, Heading2 } from "./type";

import type { FC2 } from "../../types";
import { useHeading2s } from "./useHeading2s";
import { useAnchorStatus } from "./useAnchorStatus";

type SideNavProps = {
  className?: string;
  headings: Heading[];
};

type SideNavFC = FC2<SideNavProps>;

function useSideNavData(headings: Heading2[]) {
  const isMultiH1 = useMemo<boolean>(
    () => headings.filter((heading) => heading.depth === 1).length > 1,
    [headings]
  );
  const filterItems = useMemo<Heading2[]>(
    () =>
      isMultiH1
        ? headings.filter((heading) => heading.depth < 3)
        : headings.filter((heading) => heading.depth > 1 && heading.depth < 4),
    [headings, isMultiH1]
  );

  return {
    isMultiH1,
    filterItems,
    startDepth: isMultiH1 ? 1 : 2,
  };
}

const SideNav: SideNavFC = ({ className, headings }) => {
  const items = useHeading2s(headings);
  const { filterItems, startDepth } = useSideNavData(items);
  const anchorStatus = useAnchorStatus(items);
  const handleJumpTo = useCallback((heading: Heading2) => {
    const $ele = document.querySelector(`a[href="${heading.hash}"]`);
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
      <div className="py-4 text-gray-900 font-bold dark:text-gray-100">
        导航
      </div>
      <div className="mb-4 flex-1 overflow-y-auto">
        {filterItems.map((item) => (
          <div
            key={item.hash}
            className={cls([
              "py-1 cursor-pointer text-sm hover:text-gray-900 hover:font-medium dark:hover:text-gray-100",
              {
                "pl-3": item.depth === startDepth + 1,
                "pl-6": item.depth === startDepth + 2,
              },
              anchorStatus[item.hash]
                ? "font-medium text-gray-900 dark:text-gray-100"
                : "text-gray-400 dark:text-true-gray-500",
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
