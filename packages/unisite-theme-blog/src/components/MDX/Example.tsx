import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

type ExampleProps = {
  className?: string;
};

type ExampleFC = React.FC<ExampleProps>;

const Example: ExampleFC = ({ className, children, ...props }) => {
  console.log("Example props:", props);

  return <div className={cls([className, prefix("example")])}>{children}</div>;
};

export type { ExampleProps };
export default Example;
