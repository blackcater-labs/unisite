import React from "react";

type ParagraphProps = {};

type ParagraphFC = React.FC<ParagraphProps>;

const Paragraph: ParagraphFC = ({ children }) => (
  <p className="relative mb-6 text-gray-900">{children}</p>
);

export type { ParagraphProps };
export default Paragraph;
