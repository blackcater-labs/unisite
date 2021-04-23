import React from "react";
import { Sun as IconSun, Moon as IconMoon } from "@icon-park/react";
// @ts-ignore
import { ThemeToggler } from "@unisite/gatsby-plugin-dark-mode";

type ThemeSwitchProps = {};
type ThemeSwitchFC = React.FC<ThemeSwitchProps>;

// <Sun theme="outline" size="24" fill="#333"/>
// <Moon theme="outline" size="24" fill="#333"/>

const ThemeSwitch: ThemeSwitchFC = () => {
  if (typeof window === undefined) return null;

  return (
    <ThemeToggler>
      {
        // @ts-ignore
        ({ theme, toggleTheme }) => {
          console.log("theme:", theme);

          if (theme === "light") {
            return (
              <div className="inline-flex flex-row items-center p-1 space-x-1 bg-gray-200 rounded-full dark:bg-true-gray-900">
                <div
                  className="text-gray-900 font-semibold bg-white shadow inline-flex flex-row items-center px-2 py-1 text-sm cursor-pointer rounded-full transition duration-300 ease-in-out"
                  onClick={() => toggleTheme("dark")}
                >
                  <IconSun theme="outline" size="14" />
                </div>
              </div>
            );
          }

          if (theme === "dark") {
            return (
              <div className="inline-flex flex-row items-center p-1 space-x-1 bg-gray-200 rounded-full dark:bg-true-gray-900">
                <div
                  className="font-semibold shadow dark:text-gray-100 dark:bg-true-gray-700 inline-flex flex-row items-center px-2 py-1 text-sm cursor-pointer rounded-full transition duration-300 ease-in-out"
                  onClick={() => toggleTheme("light")}
                >
                  <IconMoon theme="outline" size="14" />
                </div>
              </div>
            );
          }

          return null;
        }
      }
    </ThemeToggler>
  );
};

export type { ThemeSwitchProps };
export default ThemeSwitch;
