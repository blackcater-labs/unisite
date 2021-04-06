import React from "react";

import HeaderTip from "../HeaderTip";
import CategoryNav from "../CategoryNav";
import Dropdown from "../Dropdown";
import Menu from "../Menu";
import Button from "../Button";

type HeaderProps = {
  layout?: "absolute" | "sticky" | "autoHidden";
  // dark?: boolean;
  // transparent?: boolean;
};
type HeaderFC = React.FC<HeaderProps>;

const Header: HeaderFC = () => {
  return (
    <>
      <div className="bg-white">
        <HeaderTip>
          <a className="hover:underline" href="">
            BLACK LIVES MATTER
          </a>
        </HeaderTip>
        <header className="max-w-6xl h-16 mx-auto items-center rounded-2xl z-40">
          <div className="px-6 relative flex flex-row justify-between items-center w-full h-full">
            <div className="flex flex-row items-center">
              <div className="mr-4 rounded-xl w-10 h-10 bg-gray-400"></div>
              <div className="space-x-2 flex flex-row items-center">
                <Dropdown
                  trigger={
                    <span
                      tabIndex={0}
                      className="px-3 py-1 inline-flex flex-row items-center text-gray-700 rounded-md cursor-pointer outline-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      菜单1
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
                  }
                >
                  <Menu>
                    <Menu.Item
                      title="Help"
                      content="你可以在这里找到帮助信息你可以在这里找到帮助信息"
                      avatar="0"
                    />
                    <Menu.Divider />
                    <Menu.Item title="help" />
                    <Menu.Item title="help" />
                  </Menu>
                </Dropdown>
                <Dropdown
                  trigger={
                    <span
                      tabIndex={0}
                      className="px-3 py-1 inline-flex flex-row items-center text-gray-700 rounded-md cursor-pointer outline-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      菜单2
                    </span>
                  }
                >
                  <Menu>
                    <Menu.Item
                      title="Help"
                      content="你可以在这里找到帮助信息你可以在这里找到帮助信息"
                      avatar="0"
                    />
                    <Menu.Divider />
                    <Menu.Item title="help" />
                    <Menu.Item title="help" />
                  </Menu>
                </Dropdown>
                <Dropdown
                  trigger={
                    <span
                      tabIndex={0}
                      className="px-3 py-1 inline-flex flex-row items-center text-gray-700 rounded-md cursor-pointer outline-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      菜单3
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
                  }
                >
                  <Menu>
                    <Menu.Item
                      title="Help"
                      content="你可以在这里找到帮助信息你可以在这里找到帮助信息"
                      avatar="0"
                    />
                    <Menu.Divider />
                    <Menu.Item title="help" />
                    <Menu.Item title="help" />
                  </Menu>
                </Dropdown>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <Button>登录</Button>
            </div>
          </div>
        </header>
      </div>
      <CategoryNav />
    </>
  );
};

export type { HeaderProps };
export default Header;
