import React from "react";
import cls from "classnames";
import { Sun as IconSun, Moon as IconMoon } from "@icon-park/react";
// @ts-ignore
import { ThemeToggler } from "@unisite/gatsby-plugin-dark-mode";

type ThemeSwitchProps = {};
type ThemeSwitchFC = React.FC<ThemeSwitchProps>;

// <Sun theme="outline" size="24" fill="#333"/>
// <Moon theme="outline" size="24" fill="#333"/>

const ThemeSwitch: ThemeSwitchFC = () => {
  return (
    <ThemeToggler>
      {
        // @ts-ignore
        ({ theme, toggleTheme }) => {
          console.log("theme:", theme);

          if (theme == null) {
            return null;
          }

          return (
            <div className="inline-flex flex-row items-center p-1 space-x-1 bg-gray-200 rounded-full dark:bg-true-gray-900">
              <div
                className={cls([
                  theme === "light"
                    ? "text-gray-900 font-semibold bg-white shadow dark:text-gray-100 dark:bg-true-gray-700"
                    : "text-gray-700 dark:text-gray-300",
                  "inline-flex flex-row items-center px-2 py-1 text-sm cursor-pointer rounded-full transition duration-300 ease-in-out",
                ])}
                onClick={() => toggleTheme("light")}
              >
                <IconSun theme="outline" size="14" />
              </div>
              <div
                className={cls([
                  theme === "dark"
                    ? "text-gray-900 font-semibold bg-white shadow dark:text-gray-100 dark:bg-true-gray-700"
                    : "text-gray-700 dark:text-gray-300",
                  "inline-flex flex-row items-center px-2 py-1 text-sm cursor-pointer rounded-full transition duration-300 ease-in-out",
                ])}
                onClick={() => toggleTheme("dark")}
              >
                <IconMoon theme="outline" size="14" />
              </div>
            </div>
          );
        }
      }
    </ThemeToggler>
  );
};

export type { ThemeSwitchProps };
export default ThemeSwitch;
