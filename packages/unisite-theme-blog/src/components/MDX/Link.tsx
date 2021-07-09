import React from "react";
import cls from "classnames";
import { Share as IconShare } from "@icon-park/react";

import { prefix } from "./_utils";

interface LinkProps {
  className?: string;
  showIcon?: boolean;
}

type LinkFC = React.FC<LinkProps>;

const Link: LinkFC = ({ className, showIcon = false, children, ...props }) => {
  const isAnchor = /anchor/.test(className || "");

  return (
    <a className={cls([className, prefix("link")])} {...props}>
      {!showIcon ? (
        isAnchor ? (
          children
        ) : (
          <span className={prefix("link__content")}>{children}</span>
        )
      ) : (
        <>
          <span className={prefix("link__content")}>{children}</span>
          <IconShare
            className={prefix("link__icon")}
            theme="outline"
            size="14"
          />
        </>
      )}
    </a>
  );
};

export type { LinkProps };
export default Link;
