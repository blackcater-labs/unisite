import React from "react";
import cls from "classnames";
import { Quote as IconQuote } from "@icon-park/react";

import { prefix } from "./_utils";

interface BlockquoteProps {
  className?: string;
}

type BlockquoteFC = React.FC<BlockquoteProps>;

const Blockquote: BlockquoteFC = ({ className, children }) => (
  <blockquote className={cls([className, prefix("blockquote")])}>
    <IconQuote theme="outline" size="16" />
    {children}
  </blockquote>
);

export type { BlockquoteProps };
export default Blockquote;
