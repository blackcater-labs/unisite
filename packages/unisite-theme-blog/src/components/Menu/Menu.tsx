import React from "react";
import cls from "classnames";

import MenuItem from "./MenuItem";
import MenuDivider from "./MenuDivider";

type MenuProps = {
  className?: string;
};
type MenuFC = React.FC<MenuProps> & {
  Item: typeof MenuItem;
  Divider: typeof MenuDivider;
};

const Menu: MenuFC = ({ className, children }) => {
  return (
    <div
      className={cls(
        className,
        "relative flex flex-col px-3 py-4 bg-white shadow-md rounded-xl"
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
