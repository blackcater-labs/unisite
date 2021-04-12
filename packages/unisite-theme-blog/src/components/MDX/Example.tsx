import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

type ExampleProps = {
  className?: string;
};

type ExampleFC = React.FC<ExampleProps>;

const Example: ExampleFC = ({ className, children }) => (
  <div
    className={cls([
      className,
      prefix("example"),
      "p-4 border border-gray-200 rounded-lg",
    ])}
  >
    {children}
  </div>
);

export type { ExampleProps };
export default Example;
