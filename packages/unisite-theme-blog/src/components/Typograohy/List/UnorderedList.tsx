import React from "react";

type UnorderedListProps = {};

type UnorderedListFC = React.FC<UnorderedListProps>;

const UnorderedList: UnorderedListFC = ({ children }) => (
  <ul className="list-disc ml-5 mb-6">{children}</ul>
);

export type { UnorderedListProps };
export default UnorderedList;
