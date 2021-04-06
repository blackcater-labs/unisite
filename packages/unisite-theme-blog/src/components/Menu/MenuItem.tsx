import React from "react";

import type { FC2 } from "../../types";

type MenuItemProps = {
  title?: React.ReactChild;
  content?: React.ReactChild;
  avatar?: React.ReactChild;
};
type MenuItemFC = FC2<MenuItemProps>;

const MenuItem: MenuItemFC = ({ title, content, avatar }) => {
  return (
    <div className="px-3 py-2 flex flex-row w-60 rounded-lg cursor-pointer hover:bg-gray-100 hover:shadow-inner">
      {avatar ? (
        <div className="flex-shrink-0 mt-1 mr-2 w-8 h-8 bg-gray-200 rounded-md">
          {avatar}
        </div>
      ) : null}
      <div>
        <div className="text-base text-gray-900 font-medium">{title}</div>
        {content ? (
          <div className="text-sm text-gray-500">{content}</div>
        ) : null}
      </div>
    </div>
  );
};

export type { MenuItemProps };
export default MenuItem;
