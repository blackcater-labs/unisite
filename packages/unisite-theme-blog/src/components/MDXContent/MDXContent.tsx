import React from "react";
import cls from "classnames";
import { MDXRenderer } from "gatsby-plugin-mdx";

type MDXContentProps = {
  className?: string;
  children?: any;
};

const MDXContent = React.forwardRef<HTMLDivElement, MDXContentProps>(
  ({ className, children }, forwardRef) => {
    return (
      <div
        ref={forwardRef}
        className={cls([
          className,
          "gatsby-typography",
          "gatsby-typography--no-last-margin",
        ])}
      >
        <MDXRenderer>{children}</MDXRenderer>
      </div>
    );
  }
);

export type { MDXContentProps };
export default MDXContent;
