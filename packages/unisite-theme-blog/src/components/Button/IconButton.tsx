import React from "react";
import cls from "classnames";

type IconButtonProps = { className?: string };
type IconButtonFC = React.FC<IconButtonProps>;

const IconButton: IconButtonFC = ({ className, children }) => {
  return (
    <button
      className={cls([
        className,
        "flex flex-row items-center px-2 h-8 bg-gray-900 text-gray-50 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-opacity-80 transition ease-in duration-300 ",
      ])}
    >
      {children}
    </button>
  );
};

export type { IconButtonProps };
export default IconButton;
