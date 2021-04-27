import React from "react";

type Social = {
  type: string;
  color: string;
  backgroundColor: string;
  Svg: React.LazyExoticComponent<any>;
};

export const socials: Social[] = [
  {
    type: "facebook",
    color: "#ffffff",
    backgroundColor: "#1877f2",
    Svg: React.lazy(() => import("./svg/SvgFacebook")),
  },
  {
    type: "twitter",
    color: "#ffffff",
    backgroundColor: "#1da1f2",
    Svg: React.lazy(() => import("./svg/SvgTwitter")),
  },
  {
    type: "github",
    color: "#ffffff",
    backgroundColor: "#181717",
    Svg: React.lazy(() => import("./svg/SvgGithub")),
  },
  {
    type: "leetcode",
    color: "#000000",
    backgroundColor: "#ffa116",
    Svg: React.lazy(() => import("./svg/SvgLeetcode")),
  },
  {
    type: "wechat",
    color: "#ffffff",
    backgroundColor: "#07c160",
    Svg: React.lazy(() => import("./svg/SvgWechat")),
  },
  {
    type: "youtube",
    color: "#ffffff",
    backgroundColor: "#ff0000",
    Svg: React.lazy(() => import("./svg/SvgYoutube")),
  },
  {
    type: "bilibili",
    color: "#ffffff",
    backgroundColor: "#00A1D6",
    Svg: React.lazy(() => import("./svg/SvgBilibili")),
  },
  {
    type: "email",
    color: "#ffffff",
    backgroundColor: "#ea4335",
    Svg: React.lazy(() => import("./svg/SvgEmail")),
  },
  {
    type: "website",
    color: "#ffffff",
    backgroundColor: "#ff5722",
    Svg: React.lazy(() => import("./svg/SvgWebsite")),
  },
];
