import React from "react";

import { ThemeProvider } from "../lib";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
