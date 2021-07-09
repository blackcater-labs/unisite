import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { get } from "lodash";

import HeaderTip from "./HeaderTip";
import HeaderNav from "./HeaderNav";
import HeaderCategoryNav from "./HeaderCategoryNav";

interface HeaderProps {
  layout?: "absolute" | "sticky" | "autoHidden";
  // dark?: boolean;
  // transparent?: boolean;
}
type HeaderFC = React.FC<HeaderProps>;

const Header: HeaderFC = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      unisiteThemeBlogConfig {
        header {
          bar
          nav
        }
      }
    }
  `);
  const { bar, nav: items } = get(data, "unisiteThemeBlogConfig.header") || {};

  return (
    <>
      <HeaderTip closable={bar?.closable}>
        <a className="hover:underline" href="">
          {bar?.text}
        </a>
      </HeaderTip>
      <HeaderNav items={items} />
      <HeaderCategoryNav />
    </>
  );
};

export type { HeaderProps };
export default Header;
