import React from "react";
import { Pound as IconPound } from "@icon-park/react";

type H2Props = {
  id: string;
};

type H2FC = React.FC<H2Props>;

const H2: H2FC = ({ id, children }) => (
  <h2
    id={id}
    className="group relative mt-8 mb-4 text-3xl text-gray-900 font-medium"
  >
    <a
      href={`#${id}`}
      className="absolute top-1/2 -left-5 transform -translate-y-1/2 cursor-pointer transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
    >
      <IconPound size="16" />
    </a>
    <span>{children}</span>
  </h2>
);

export type { H2Props };
export default H2;
