import React from "react";
import cls from "classnames";

import IconButton from "./IconButton";

type ButtonProps = { className?: string };
type ButtonFC = React.FC<ButtonProps> & {
  Icon: typeof IconButton;
};

const Button: ButtonFC = ({ className, children }) => {
  return (
    <button
      className={cls([
        className,
        "flex flex-row items-center px-4 py-2 text-white bg-gray-900 hover:bg-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-opacity-80 transition ease-in duration-300 dark:text-gray-900 dark:bg-gray-100  dark:hover:bg-gray-300 dark:focus:ring-true-gray-300",
      ])}
    >
      {children}
    </button>
  );
};

Button.Icon = IconButton;

export type { ButtonProps };
export default Button;
