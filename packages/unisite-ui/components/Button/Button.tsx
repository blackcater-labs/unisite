import React from "react";
import { Button, ButtonProps } from "antd";

type UButtonProps = ButtonProps;

const UButton: React.FC<UButtonProps> = (props) => {
  return <Button {...props} />;
};

export { UButtonProps };
export default UButton;
