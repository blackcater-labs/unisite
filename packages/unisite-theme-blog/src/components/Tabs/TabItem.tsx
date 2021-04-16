import React from "react";
import cls from "classnames";

type TabItemProps = {
  tabKey: string;
  tab: React.ReactChild;
  active?: boolean;
  onClick?: () => void;
};
type TabItemFC = React.FC<TabItemProps>;

const TabItem: TabItemFC = ({ tab, active, onClick }) => {
  return (
    <div
      className={cls([
        active
          ? "text-gray-900 font-semibold bg-white shadow"
          : "text-gray-700",
        "inline-flex flex-row items-center px-4 py-1 text-sm hover:text-gray-900 hover:font-semibold cursor-pointer rounded-full transition duration-300 ease-in-out",
      ])}
      onClick={onClick}
    >
      {tab}
    </div>
  );
};

export type { TabItemProps };
export default TabItem;
