// @ts-ignore
import React from "react";
import * as PropTypes from "prop-types";
import { InferProps } from "prop-types";

function Button({ children }: InferProps<typeof Button.propTypes>) {
  return <button>{children}</button>;
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
};

export default Button;
