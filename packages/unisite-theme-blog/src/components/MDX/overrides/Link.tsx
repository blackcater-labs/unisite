import React from "react";
import { Share as IconShare } from "@icon-park/react";

type LinkProps = {
  className?: string;
};

type LinkFC = React.FC<LinkProps>;

const Link: LinkFC = ({ className, children, ...props }) => {
  const isAnchor = /anchor/.test(className || "");

  return (
    <a className={className} {...props}>
      {isAnchor ? (
        children
      ) : (
        <>
          <span>{children}</span>
          <IconShare theme="outline" size="14" />
        </>
      )}
    </a>
  );
};

export type { LinkProps };
export default Link;
