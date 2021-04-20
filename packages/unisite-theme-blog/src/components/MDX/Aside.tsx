import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

type AsideProps = {
  className?: string;
  color?: string;
  type?: string;
  header?: string;
};

type AsideFC = React.FC<AsideProps>;

const Aside: AsideFC = ({
  className,
  color,
  type = "gray",
  header,
  children,
}) => {
  type = color || type;

  return (
    <div
      className={cls([className, prefix("aside"), prefix(`aside-${color}`)])}
    >
      {header ? <div className={prefix("aside-header")}>{header}</div> : null}
      {children}
    </div>
  );
};

export type { AsideProps };
export default Aside;
