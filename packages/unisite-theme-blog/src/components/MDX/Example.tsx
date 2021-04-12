import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

type ExampleProps = {
  className?: string;
};

type ExampleFC = React.FC<ExampleProps>;

const Example: ExampleFC = ({ className, children }) => (
  <div className={cls([className, prefix("example")])}>{children}</div>
);

export type { ExampleProps };
export default Example;
