import React from "react";

import Link from "../Link";
import Dropdown from "../Dropdown";
import Menu from "../Menu";
import Button from "../Button";

type HeaderNavProps = {
  items?: {
    title?: string;
    link?: string;
    target?: string;
    items?: {
      title?: string;
      subTitle?: string;
      link?: string;
      target?: string;
    }[];
  }[];
};

type HeaderNavFC = React.FC<HeaderNavProps>;

const HeaderNav: HeaderNavFC = ({ items = [] }) => {
  return (
    <header className="relative z-50 bg-white dark:bg-true-gray-900">
      <div className="max-w-6xl mx-auto h-16 px-6 relative flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Link to="/">
            <div className="mr-4 rounded-xl w-10 h-10 bg-gray-400 dark:bg-true-gray-700"></div>
          </Link>
          <div className="hidden md:flex space-x-2 flex-row items-center">
            {(items || []).map(({ title, link, target, items }, idx) => {
              if (!items || items.length === 0)
                return (
                  <Link
                    key={idx}
                    className="px-3 py-1 inline-flex flex-row items-center text-gray-700 rounded-md cursor-pointer outline-none hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-300 dark:hover:bg-true-gray-800 dark:focus:bg-true-gray-800"
                    to={link || "/"}
                    target={target || "_self"}
                    tabIndex={0}
                  >
                    {title}
                  </Link>
                );

              return (
                <Dropdown
                  key={idx}
                  overlay={
                    <Menu>
                      {items.map((item, idx) => (
                        <Menu.Item key={idx} {...item} />
                      ))}
                    </Menu>
                  }
                >
                  <span
                    tabIndex={0}
                    className="px-3 py-1 inline-flex flex-row items-center text-gray-700 rounded-md cursor-pointer outline-none hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-300 dark:hover:bg-true-gray-800 dark:focus:bg-true-gray-800"
                  >
                    {title}
                    <svg
                      className="w-5 h-5"
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
                  </span>
                </Dropdown>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Button>登录</Button>
        </div>
      </div>
    </header>
  );
};

export type { HeaderNavProps };
export default HeaderNav;
