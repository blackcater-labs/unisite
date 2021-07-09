import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";
import type { FC2 } from "../../types";

interface DividerProps {
  className?: string;
}

type DividerFC = FC2<DividerProps>;

const Divider: DividerFC = ({ className }) => (
  <hr className={cls([className, prefix("divider")])} />
);

export type { DividerProps };
export default Divider;
