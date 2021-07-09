import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

interface TagProps {
  className?: string;
  color?: string;
}

type TagFC = React.FC<TagProps>;

const Tag: TagFC = ({ className, color = "gray", children }) => (
  <span className={cls([className, prefix("tag"), prefix(`tag-${color}`)])}>
    {children}
  </span>
);

export type { TagProps };
export default Tag;
