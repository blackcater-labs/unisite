import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

type HighlightProps = {
  className?: string;
  color?: string;
};

type HighlightFC = React.FC<HighlightProps>;

const Highlight: HighlightFC = ({ className, color = "gray", children }) => {
  return (
    <span className={cls([className, prefix("highlight"), `bg-${color}-100`])}>
      {children}
    </span>
  );
};

export type { HighlightProps };
export default Highlight;
