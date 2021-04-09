import React from "react";
import cls from "classnames";

type CardProps = { className?: string };
type CardFC = React.FC<CardProps>;

const Card: CardFC = ({ className, children }) => {
  return (
    <div
      className={cls([
        "w-full px-8 py-6 transform duration-300 ease-in-out bg-white rounded-2xl shadow-sm hover:shadow-md dark:bg-gray-800",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export type { CardProps };
export default Card;
