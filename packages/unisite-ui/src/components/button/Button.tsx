import React from "react";

interface ButtonProps {
  children?: React.ReactChild;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="px-4 py-2">{children}</button>;
};

export type { ButtonProps };
export default Button;
