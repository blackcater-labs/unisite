import React from "react";
import { MDXProvider } from "@mdx-js/react";

import {
  Paragraph,
  H1,
  H2,
  UnorderedList,
  ListItem,
  Code,
} from "../components/Typograohy";
import Header from "../components/Header";
import Footer from "../components/Footer";

type DefaultLayoutProps = {};

type DefaultLayoutFC = React.FC<DefaultLayoutProps>;

const DefaultLayout: DefaultLayoutFC = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: Paragraph,
        h1: H1,
        h2: H2,
        ul: UnorderedList,
        li: ListItem,
        // code: Code,
        pre: Code,
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
