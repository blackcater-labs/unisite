import React from "react";
import cls from "classnames";

type IconButtonProps = { className?: string };
type IconButtonFC = React.FC<IconButtonProps>;

const IconButton: IconButtonFC = ({ className, children }) => {
  return (
    <button
      className={cls([
        className,
        "flex flex-row items-center px-2 h-8 text-white bg-gray-900 hover:bg-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-opacity-80 transition ease-in duration-300 dark:bg-gray-100 dark:hover:bg-gray-300 dark:focus:ring-gray-300",
      ])}
    >
      {children}
    </button>
  );
};

export type { IconButtonProps };
export default IconButton;
