import React from "react";
import { Close as IconClose } from "@icon-park/react";

type HeaderTipProps = {};

type HeaderTipFC = React.FC<HeaderTipProps>;

const HeaderTip: HeaderTipFC = ({ children }) => {
  return (
    <div className="bg-gray-700 py-2">
      <div className="max-w-6xl mx-auto px-6 flex flex-row justify-between items-center text-white">
        <div>{children}</div>
        <div className="transition ease-in-out duration-300 transform rotate-0 cursor-pointer hover:rotate-180">
          <IconClose size={16} />
        </div>
      </div>
    </div>
  );
};

export type { HeaderTipProps };
export default HeaderTip;
