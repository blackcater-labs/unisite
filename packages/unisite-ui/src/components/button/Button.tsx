import React from "react";
import { Button as MButton, ButtonProps as MButtonProps } from "@mantine/core";

type ButtonProps = MButtonProps;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <MButton {...rest}>{children}</MButton>;
};

export type { ButtonProps };
export default Button;
