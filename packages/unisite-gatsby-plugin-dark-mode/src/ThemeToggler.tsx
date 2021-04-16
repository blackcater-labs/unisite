import React, { useCallback, useEffect, useState } from "react";

import { ThemeTogglerProps } from "./types";

const ThemeToggler = ({ children: Comp }: ThemeTogglerProps) => {
  const [theme, setTheme] = useState<string>(
    // @ts-ignore
    typeof window !== "undefined" ? window.__theme ?? "" : ""
  );
  const toggleTheme = useCallback((theme: string) => {
    // @ts-ignore
    window.__setPreferredTheme(theme);
  }, []);

  useEffect(() => {
    // @ts-ignore
    window.__onThemeChange = () => {
      // @ts-ignore
      setTheme(window.__theme ?? "");
    };
  }, []);

  return <Comp theme={theme} toggleTheme={toggleTheme} />;
};

export default ThemeToggler;
