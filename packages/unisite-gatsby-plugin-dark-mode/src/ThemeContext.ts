import { createContext } from "react";

import { ThemeProps } from "./types";

export const ThemeContext = createContext<ThemeProps>({
  theme: "",
  changeTheme: () => {},
});
