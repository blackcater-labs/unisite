import React, { Suspense } from "react";

import Link from "../Link";
import { socials } from "./socials";

type SocialBtnProps = {
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
    <Suspense
      fallback={
        <span className="inline-block w-6 h-6 rounded-md bg-gray-200 dark:bg-true-gray-700 animate-pulse" />
      }
    >
      {/* @ts-ignore */}
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
    </Suspense>
  );
};

export type { SocialBtnProps };
export default SocialBtn;
