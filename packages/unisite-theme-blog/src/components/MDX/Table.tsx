import React from "react";
import cls from "classnames";

import { prefix } from "./_utils";

interface TableProps {
  className?: string;
}

type TableFC = React.FC<TableProps>;

const Table: TableFC = ({ className, children, ...props }) => (
  <div className={cls([className, prefix("table")])}>
    <table {...props}>{children}</table>
  </div>
);

export type { TableProps };
export default Table;
