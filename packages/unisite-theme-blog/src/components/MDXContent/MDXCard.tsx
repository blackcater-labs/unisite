import React, { useRef, useLayoutEffect, useState } from "react";
import cls from "classnames";

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
  const [hasTitle, setHasTitle] = useState(false);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    setHasTitle(!!(contentRef.current! as HTMLDivElement).querySelector("h1"));
  }, [children]);

  return (
    <Card {...props}>
      <MDXContent
        className={cls([contentClassName, hasTitle ? "-my-6" : "-mb-6"])}
        ref={contentRef}
      >
        {children}
      </MDXContent>
    </Card>
  );
};

export type { MDXCardProps };
export default MDXCard;
