import React from "react";
import { Pound as IconPound } from "@icon-park/react";

type H1Props = {
  id: string;
};

type H1FC = React.FC<H1Props>;

const H1: H1FC = ({ id, children }) => (
  <h1
    id={id}
    className="group relative mt-9 mb-6 text-4xl text-gray-900 font-medium"
  >
    <a
      href={`#${id}`}
      className="absolute top-1/2 -left-5 transform -translate-y-1/2 cursor-pointer transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
    >
      <IconPound size="16" />
    </a>
    <span>{children}</span>
  </h1>
);

export type { H1Props };
export default H1;
