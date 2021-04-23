import React, { useState } from "react";
import { Close as IconClose } from "@icon-park/react";

import { store } from "../../utils/store";

type HeaderTipProps = {
  closable?: boolean;
};

type HeaderTipFC = React.FC<HeaderTipProps>;

const HeaderTip: HeaderTipFC = ({ closable = false, children }) => {
  const [isClosed, setIsClosed] = useState(
    closable ? store.get("header_bar_closed") : false
  );

  if (isClosed) return null;

  return (
    <div className="bg-gray-700 py-2 dark:bg-gray-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-row justify-between items-center text-white dark:text-gray-900">
        <div>{children}</div>
        {closable ? (
          <div
            className="transition ease-in-out duration-300 transform rotate-0 cursor-pointer hover:rotate-180"
            onClick={() => {
              setIsClosed(true);
              store.set("header_bar_closed", true);
            }}
          >
            <IconClose size={16} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export type { HeaderTipProps };
export default HeaderTip;
