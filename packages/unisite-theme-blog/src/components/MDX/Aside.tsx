import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

type AsideProps = {
  className?: string;
  type?: string;
  header?: string;
};

type AsideFC = React.FC<AsideProps>;

const Aside: AsideFC = ({ className, type = "gray", header, children }) => {
  return (
    <div
      className={cls([
        className,
        prefix("aside"),
        `bg-${type}-50`,
        `border-${type}-500`,
        "mb-6 px-4 py-3 border-l-4 rounded-md",
      ])}
    >
      {header ? <div className="mb-1 text-sm font-bold">{header}</div> : null}
      {children}
    </div>
  );
};

export type { AsideProps };
export default Aside;
