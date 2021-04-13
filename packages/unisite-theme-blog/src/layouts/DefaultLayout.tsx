import React from "react";
import { MDXProvider } from "@mdx-js/react";

import components from "../components";
import {
  Link,
  Divider,
  Blockquote,
  CodeBlock,
  Table,
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
        hr: Divider,
        blockquote: Blockquote,
        pre: CodeBlock,
        table: Table,
        //  Extended Components
        Link,
        Tag,
        Aside,
        Highlight,
        Example,
        ...components,
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
