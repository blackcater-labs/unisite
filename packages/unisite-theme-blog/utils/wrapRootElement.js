import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Tweet, YouTube, CodePen, CodeSandbox, Gist } from "mdx-embed";

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
  // Embed
  Bilibili,
  NeteaseMusic,
} from "../src/components/MDX";
import AspectRatio from "../src/components/AspectRatio";

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider
      components={{
        a: Link,
        hr: Divider,
        blockquote: Blockquote,
        pre: CodeBlock,
        table: Table,
        // Extended Components
        Link,
        Tag,
        Aside,
        Highlight,
        Example,
        Bilibili,
        NeteaseMusic,
        // Mdx Embed
        Tweet,
        YouTube,
        CodePen,
        CodeSandbox,
        Gist,
        // Common Components
        AspectRatio,
        ...components,
      }}
    >
      {element}
    </MDXProvider>
  );
};
