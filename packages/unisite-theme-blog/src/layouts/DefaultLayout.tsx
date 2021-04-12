import React from "react";
import { MDXProvider } from "@mdx-js/react";

import {
  Blockquote,
  Table,
  Link,
  CodeBlock,
  Divider,
  Aside,
  Highlight,
  Example,
  Tag,
} from "../components/MDX";
import Header from "../components/Header";
import Footer from "../components/Footer";

type DefaultLayoutProps = {};

type DefaultLayoutFC = React.FC<DefaultLayoutProps>;

const DefaultLayout: DefaultLayoutFC = ({ children }) => {
  return (
    <MDXProvider
      components={{
        a: Link,
        blockquote: Blockquote,
        table: Table,
        pre: CodeBlock,
        hr: Divider,
        //  Extended Components
        Link,
        Tag,
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
