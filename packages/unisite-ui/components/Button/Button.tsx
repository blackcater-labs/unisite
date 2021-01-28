import React from "react";
import { Button as AButton, ButtonProps as AButtonProps } from "antd";
import { prefixCls } from "../_utils";

const prefix = prefixCls("btn");

type ButtonProps = AButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  console.log("props:", props);

  return <AButton {...props} prefixCls={prefix} />;
};

export { ButtonProps };
export default Button;
