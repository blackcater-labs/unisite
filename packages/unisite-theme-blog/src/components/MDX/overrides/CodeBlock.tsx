import React from "react";

type CodeBlockProps = {};

type CodeBlockFC = React.FC<CodeBlockProps>;

const CodeBlock: CodeBlockFC = ({ children, ...props }) => {
  console.log("code-block:", props);

  return <pre {...props}>{children}</pre>;
};

export type { CodeBlockProps };
export default CodeBlock;
