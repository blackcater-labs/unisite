import React, { useMemo } from "react";
import cls from "classnames";

import type { FC2, Heading } from "../../types";

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
  const items: Heading[] = useMemo(
    () =>
      isMultiH1
        ? headings.filter((heading) => heading.depth < 3)
        : headings.filter((heading) => heading.depth > 1 && heading.depth < 4),
    [isMultiH1, headings]
  );
  const depth = isMultiH1 ? 1 : 2;

  return (
    <div
      className={cls([className, "max-h-screen flex flex-col overflow-hidden"])}
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
            ])}
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
