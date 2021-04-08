import React from "react";

import HeaderTip from "./HeaderTip";
import HeaderNav from "./HeaderNav";
import HeaderCategoryNav from "./HeaderCategoryNav";

type HeaderProps = {
  layout?: "absolute" | "sticky" | "autoHidden";
  // dark?: boolean;
  // transparent?: boolean;
};
type HeaderFC = React.FC<HeaderProps>;

const Header: HeaderFC = () => {
  return (
    <>
      <HeaderTip>
        <a className="hover:underline" href="">
          BLACK LIVES MATTER
        </a>
      </HeaderTip>
      <HeaderNav />
      <HeaderCategoryNav />
    </>
  );
};

export type { HeaderProps };
export default Header;
