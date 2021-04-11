import React from "react";
import { Quote as IconQuote } from "@icon-park/react";

type BlockquoteProps = {};

type BlockquoteFC = React.FC<BlockquoteProps>;

const Blockquote: BlockquoteFC = ({ children }) => (
  <blockquote>
    <IconQuote theme="outline" size="16" />
    {children}
  </blockquote>
);

export type { BlockquoteProps };
export default Blockquote;
