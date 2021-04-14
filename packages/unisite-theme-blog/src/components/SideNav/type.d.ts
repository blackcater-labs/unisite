import type { Heading } from "@unisite/core-blog";

export type { Heading };
export type Heading2 = Heading & {
  anchor: string;
  hash: string;
};
