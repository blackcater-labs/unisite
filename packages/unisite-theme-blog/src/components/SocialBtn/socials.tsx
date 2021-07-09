import React from "react";

import SvgFacebook from "./svg/SvgFacebook";
import SvgTwitter from "./svg/SvgTwitter";
import SvgGithub from "./svg/SvgGithub";
import SvgLeetcode from "./svg/SvgLeetcode";
import SvgWechat from "./svg/SvgWechat";
import SvgYoutube from "./svg/SvgYoutube";
import SvgBilibili from "./svg/SvgBilibili";
import SvgEmail from "./svg/SvgEmail";
import SvgWebsite from "./svg/SvgWebsite";

interface Social {
  type: string;
  color: string;
  backgroundColor: string;
  Svg: React.ComponentType<any>;
}

export const socials: Social[] = [
  {
    type: "facebook",
    color: "#ffffff",
    backgroundColor: "#1877f2",
    Svg: SvgFacebook,
  },
  {
    type: "twitter",
    color: "#ffffff",
    backgroundColor: "#1da1f2",
    Svg: SvgTwitter,
  },
  {
    type: "github",
    color: "#ffffff",
    backgroundColor: "#181717",
    Svg: SvgGithub,
  },
  {
    type: "leetcode",
    color: "#000000",
    backgroundColor: "#ffa116",
    Svg: SvgLeetcode,
  },
  {
    type: "wechat",
    color: "#ffffff",
    backgroundColor: "#07c160",
    Svg: SvgWechat,
  },
  {
    type: "youtube",
    color: "#ffffff",
    backgroundColor: "#ff0000",
    Svg: SvgYoutube,
  },
  {
    type: "bilibili",
    color: "#ffffff",
    backgroundColor: "#00A1D6",
    Svg: SvgBilibili,
  },
  {
    type: "email",
    color: "#ffffff",
    backgroundColor: "#ea4335",
    Svg: SvgEmail,
  },
  {
    type: "website",
    color: "#ffffff",
    backgroundColor: "#ff5722",
    Svg: SvgWebsite,
  },
];
