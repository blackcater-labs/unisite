import React, { useCallback, useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import cls from "classnames";
import { Rocket as IconRocket } from "@icon-park/react";

import type { FC2 } from "../../types";

type BackTopProps = {
  className?: string;
};

type BackTopFC = FC2<BackTopProps>;

const BackTop: BackTopFC = ({ className }) => {
  const { y } = useWindowScroll();
  const [show, setShow] = useState(false);
  const handleScroll = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (y > 120) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [y]);

  return (
    <IconRocket
      className={cls([
        className,
        show ? "-translate-y-16" : "translate-y-0",
        "inline-flex flex-row justify-center items-center fixed right-6 -bottom-12 w-8 h-8 text-gray-700 bg-white hover:bg-gray-200 rounded-md shadow cursor-pointer transition ease-in-out duration-300 transform",
      ])}
      theme="outline"
      size="24"
      onClick={handleScroll}
    />
  );
};

export type { BackTopProps };
export default BackTop;
