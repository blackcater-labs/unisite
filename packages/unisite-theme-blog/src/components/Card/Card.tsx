import React from "react";
import cls from "classnames";

interface CardProps {
  hoverable?: boolean;
  className?: string;
}
type CardFC = React.FC<CardProps>;

const Card: CardFC = ({ hoverable = false, className, children }) => {
  return (
    <div
      className={cls([
        "w-full p-4 md:px-8 md:py-6 transform duration-300 ease-in-out bg-white rounded-2xl shadow-sm dark:bg-true-gray-900",
        hoverable ? "hover:shadow-md" : "",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export type { CardProps };
export default Card;
