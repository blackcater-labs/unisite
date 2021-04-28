import React from "react";
import { GatsbyLinkProps } from "gatsby";

import Link from "../Link";
import { socials } from "./socials";

type SocialBtnProps = GatsbyLinkProps<any> & {
  type: string;
};
type SocialBtnFC = React.FC<SocialBtnProps>;

const SocialBtn: SocialBtnFC = ({ type, ...props }) => {
  const social = socials.find((social) => social.type === type);
  const Svg = social?.Svg as React.ComponentType<{
    size?: number;
    color?: string;
    fill?: string;
  }>;

  return (
    <Link
      {...props}
      className="inline-block w-6 h-6 p-1 rounded-md"
      style={{
        color: social?.color,
        backgroundColor: social?.backgroundColor,
      }}
    >
      <Svg color={social?.color} />
    </Link>
  );
};

export type { SocialBtnProps };
export default SocialBtn;
