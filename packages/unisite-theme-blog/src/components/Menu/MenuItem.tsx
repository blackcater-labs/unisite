import React from "react";
import cls from "classnames";

import type { FC2 } from "../../types";

type MenuItemProps = {
  title?: React.ReactChild;
  content?: React.ReactChild;
  avatar?: React.ReactChild;
};
type MenuItemFC = FC2<MenuItemProps>;

const MenuItem: MenuItemFC = ({ title, content, avatar }) => {
  return (
    <div className="px-3 py-2 flex flex-row rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-true-gray-800">
      {avatar ? (
        <div className="flex-shrink-0 mt-1 mr-2 w-8 h-8 bg-gray-200 rounded-md dark:bg-true-gray-700">
          {avatar}
        </div>
      ) : null}
      <div className="flex flex-col">
        <div
          className={cls(
            "text-base text-gray-900 font-medium dark:text-gray-100",
            {
              "w-48": avatar,
              "w-52": !avatar && content,
            }
          )}
        >
          {title}
        </div>
        {content ? (
          <div className="text-sm text-gray-500 dark:text-gray-300">
            {content}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export type { MenuItemProps };
export default MenuItem;
