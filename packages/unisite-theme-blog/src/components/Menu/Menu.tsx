import React from "react";
import cls from "classnames";

import MenuItem from "./MenuItem";
import MenuDivider from "./MenuDivider";

interface MenuProps {
  className?: string;
}
type MenuFC = React.FC<MenuProps> & {
  Item: typeof MenuItem;
  Divider: typeof MenuDivider;
};

const Menu: MenuFC = ({ className, children }) => {
  return (
    <div
      className={cls(
        className,
        "relative flex flex-col px-3 py-4 bg-white shadow-md rounded-xl border border-gray-50 dark:border-true-gray-700 dark:bg-true-gray-900"
      )}
    >
      {children}
    </div>
  );
};

Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

export type { MenuProps };
export default Menu;
