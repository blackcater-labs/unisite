import React, { useCallback, useEffect, useState } from "react";
import store from "store2";

import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>("");
  const changeTheme = useCallback((theme: string) => {
    setTheme(theme);
    store.set("theme", theme);
    if (typeof window === "undefined") return;

    const $html = window.document.documentElement;

    $html.classList.remove("dark", "light");
    $html.classList.add(theme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const theme = store.get("theme");

    darkMode.addEventListener("change", (evt: any) => {
      changeTheme(evt.matches ? "dark" : "light");
    });

    changeTheme(theme || (darkMode.matches ? "dark" : "light"));
  }, [changeTheme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
