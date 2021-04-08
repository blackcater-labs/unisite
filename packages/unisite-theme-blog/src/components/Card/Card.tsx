import React from "react";

type CardProps = {};
type CardFC = React.FC<CardProps>;

const Card: CardFC = ({ children }) => {
  return (
    <div className="w-full px-8 py-6 transform duration-300 ease-in-out bg-white rounded-2xl shadow-sm hover:shadow-md dark:bg-gray-800">
      {children}
    </div>
  );
};

export type { CardProps };
export default Card;
