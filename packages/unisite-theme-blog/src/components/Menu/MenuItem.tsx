import React from "react";
import cls from "classnames";

import Link from "../Link";
import type { FC2 } from "../../types";

interface MenuItemProps {
  title?: React.ReactChild;
  subTitle?: React.ReactChild;
  avatar?: React.ReactChild;
  link?: string;
  target?: string;
}
type MenuItemFC = FC2<MenuItemProps>;

const MenuItem: MenuItemFC = ({ title, subTitle, avatar, link, target }) => {
  return (
    <Link
      className="px-3 py-2 flex flex-row rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-true-gray-800"
      to={link || "/"}
      target={target || "_self"}
    >
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
              "w-52": !avatar && subTitle,
            }
          )}
        >
          {title}
        </div>
        {subTitle ? (
          <div className="text-sm text-gray-500 dark:text-gray-300">
            {subTitle}
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export type { MenuItemProps };
export default MenuItem;
