import React from "react";

type CodeProps = {
  className?: string;
};

type CodeFC = React.FC<CodeProps>;

const Code: CodeFC = ({ children, ...props }) => (
  <pre {...props}>{children}</pre>
);

export type { CodeProps };
export default Code;
