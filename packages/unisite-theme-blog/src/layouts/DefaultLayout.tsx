import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

interface DefaultLayoutProps {}

type DefaultLayoutFC = React.FC<DefaultLayoutProps>;

const DefaultLayout: DefaultLayoutFC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export type { DefaultLayoutProps };
export default DefaultLayout;
