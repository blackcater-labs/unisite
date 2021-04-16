import React from "react";
import { MDXProvider } from "@mdx-js/react";

import components from "../src/components";
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
} from "../src/components/MDX";

export const wrapRootElement = ({ element }) => {
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
      {element}
    </MDXProvider>
  );
};
