import React from "react";
import { MDXProvider } from "@mdx-js/react";

import { Blockquote, Aside, Highlight, Example } from "../components/MDX";
import Header from "../components/Header";
import Footer from "../components/Footer";

type DefaultLayoutProps = {};

type DefaultLayoutFC = React.FC<DefaultLayoutProps>;

const DefaultLayout: DefaultLayoutFC = ({ children }) => {
  return (
    <MDXProvider
      components={{
        blockquote: Blockquote,
        //  Extended Components
        Aside,
        Highlight,
        Example,
      }}
    >
      <Header />
      {children}
      <Footer />
    </MDXProvider>
  );
};

export type { DefaultLayoutProps };
export default DefaultLayout;
