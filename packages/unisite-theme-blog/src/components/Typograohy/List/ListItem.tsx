import React from "react";

type ListItemProps = {};

type ListItemFC = React.FC<ListItemProps>;

const ListItem: ListItemFC = ({ children }) => <li>{children}</li>;

export type { ListItemProps };
export default ListItem;
