import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";
import type { FC2 } from "../../types";

type DividerProps = {
  className?: string;
};

type DividerFC = FC2<DividerProps>;

const Divider: DividerFC = ({ className }) => (
  <hr className={cls([className, prefix("tag"), "my-12"])} />
);

export type { DividerProps };
export default Divider;
