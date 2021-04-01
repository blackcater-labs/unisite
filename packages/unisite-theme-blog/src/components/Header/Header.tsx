import React from "react";

import Dropdown from "../Dropdown";
import Button from "../Button";

type HeaderProps = {
  layout?: "absolute" | "sticky" | "autoHidden";
  // dark?: boolean;
  // transparent?: boolean;
};
type HeaderFC = React.FC<HeaderProps>;

const Header: HeaderFC = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <header className="max-w-6xl mx-auto my-4 shadow-sm bg-white items-center h-16 rounded-2xl z-40">
        <div className="px-6 relative flex flex-row justify-between items-center w-full h-full">
          <div className="flex flex-row items-center">
            <div className="mr-4 rounded-xl w-10 h-10 bg-gray-400"></div>
            <div className="flex flex-row items-center">
              <Dropdown
                trigger={
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                <div className="w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    your profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Your projects
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Help
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Sign Out
                  </a>
                </div>
              </Dropdown>
              <Dropdown
                trigger={
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                <div className="w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    your profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Your projects
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Help
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Sign Out
                  </a>
                </div>
              </Dropdown>
              <Dropdown
                trigger={
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              >
                <div className="w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    your profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Your projects
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Help
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white"
                  >
                    Sign Out
                  </a>
                </div>
              </Dropdown>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Button>登录</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export type { HeaderProps };
export default Header;
