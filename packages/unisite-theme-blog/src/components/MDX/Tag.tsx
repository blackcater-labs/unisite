import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

type TagProps = {
  className?: string;
  color?: string;
};

type TagFC = React.FC<TagProps>;

const ColorMap: Record<string, string> = {
  default: "",
};

const Tag: TagFC = ({ className, color = "default", children }) => {
  console.log("tag color:", color);

  return (
    <span
      className={cls([
        className,
        prefix("tag"),
        prefix(`tag-${color}`),
        ColorMap[color] || "",
      ])}
    >
      {children}
    </span>
  );
};

export type { TagProps };
export default Tag;
