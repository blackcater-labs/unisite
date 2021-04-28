import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";
import { ThemeProps } from "./types";

export function useTheme(): ThemeProps {
  return useContext(ThemeContext);
}
