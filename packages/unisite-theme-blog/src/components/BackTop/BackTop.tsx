import React from "react";
import cls from "classnames";
import { Rocket as IconRocket } from "@icon-park/react";

import type { FC2 } from "../../types";

type BackTopProps = {
  className?: string;
};

type BackTopFC = FC2<BackTopProps>;

const BackTop: BackTopFC = ({ className }) => {
  return (
    <IconRocket className={cls([className, ""])} theme="outline" size="24" />
  );
};

export type { BackTopProps };
export default BackTop;
