import React from "react";

type HighlightProps = {};

type HighlightFC = React.FC<HighlightProps>;

const Highlight: HighlightFC = ({ children, ...props }) => {
  console.log("Highlight props:", props);

  return <div>{children}</div>;
};

export type { HighlightProps };
export default Highlight;
