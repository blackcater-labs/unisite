import React from "react";

type ButtonProps = {};
type ButtonFC = React.FC<ButtonProps>;

const Button: ButtonFC = ({ children }) => {
  return (
    <button className="flex flex-row items-center px-4 py-2 bg-gray-900 text-gray-50 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:ring-opacity-80 transition ease-in duration-300 ">
      {children}
    </button>
  );
};

export type { ButtonProps };
export default Button;
