import React from "react";

import type { FC2 } from "../../types";

interface MenuDividerProps {}
type MenuDividerFC = FC2<MenuDividerProps>;

const MenuDivider: MenuDividerFC = () => {
  return (
    <div className="my-2 border-b border-gray-100 dark:border-true-gray-700" />
  );
};

export type { MenuDividerProps };
export default MenuDivider;
