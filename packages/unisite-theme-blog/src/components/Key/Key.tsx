import React from "react";
import cls from "classnames";

interface KeyProps {
  className?: string;
}

type KeyFC = React.FC<KeyProps>;

const Key: KeyFC = ({ className, children }) => (
  <code
    className={cls([
      className,
      "px-2 h-6 inline-flex flex-row items-center text-gray-900 text-sm transform scale-90 border border-b-2 border-gray-500 rounded-md dark:text-gray-100 dark:bg-true-gray-700",
    ])}
  >
    {children}
  </code>
);

export type { KeyProps };
export default Key;
