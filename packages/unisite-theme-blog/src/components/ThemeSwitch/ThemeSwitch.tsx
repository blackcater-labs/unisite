import React from "react";
import { Sun as IconSun, Moon as IconMoon } from "@icon-park/react";
import { useTheme } from "@unisite/gatsby-plugin-dark-mode";

interface ThemeSwitchProps {}
type ThemeSwitchFC = React.FC<ThemeSwitchProps>;

const ThemeSwitch: ThemeSwitchFC = () => {
  const { theme, changeTheme } = useTheme();

  if (theme === "light") {
    return (
      <button
        key="light"
        className="inline-flex flex-row items-center p-1 space-x-1 bg-gray-200 rounded-full dark:bg-true-gray-900"
        onClick={() => changeTheme("dark")}
      >
        <div className="text-gray-900 font-semibold bg-white shadow inline-flex flex-row items-center px-2 py-1 text-sm cursor-pointer rounded-full transition duration-300 ease-in-out">
          <IconSun theme="outline" size="14" />
        </div>
      </button>
    );
  }

  if (theme === "dark") {
    return (
      <button
        key="dark"
        className="inline-flex flex-row items-center p-1 space-x-1 bg-gray-200 rounded-full dark:bg-true-gray-900"
        onClick={() => changeTheme("light")}
      >
        <div className="font-semibold shadow dark:text-gray-100 dark:bg-true-gray-700 inline-flex flex-row items-center px-2 py-1 text-sm cursor-pointer rounded-full transition duration-300 ease-in-out">
          <IconMoon theme="outline" size="14" />
        </div>
      </button>
    );
  }

  return null;
};

export type { ThemeSwitchProps };
export default ThemeSwitch;
