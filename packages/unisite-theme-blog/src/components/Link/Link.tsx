import React from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

type LinkProps = GatsbyLinkProps<any>;

const Link = ({ to, children, ...props }: LinkProps) => {
  if (to?.[0] === "/") {
    return (
      // @ts-ignore
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export type { LinkProps };
export default Link;
