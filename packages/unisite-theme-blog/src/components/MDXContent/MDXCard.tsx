import React, { useRef } from "react";

import Card from "../Card";
import type { CardProps } from "../Card";
import MDXContent from "./MDXContent";

type MDXCardProps = CardProps & {
  contentClassName?: string;
  children?: any;
};

type MDXCardFC = React.FC<MDXCardProps>;

const MDXCard: MDXCardFC = ({ contentClassName, children, ...props }) => {
  const contentRef = useRef(null);

  return (
    <Card {...props}>
      <MDXContent className={contentClassName} ref={contentRef}>
        {children}
      </MDXContent>
    </Card>
  );
};

export type { MDXCardProps };
export default MDXCard;
