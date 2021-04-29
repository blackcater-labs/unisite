export * from "@unisite/core-blog";
export * from "./src/types";

export interface UnisiteThemeBlogConfig {
  header?: {
    bar?: {
      text?: string;
      closable?: boolean;
    };
    nav?: Array<{
      title?: string;
      link?: string;
      target?: string;
      items?: Array<{
        title?: string;
        subTitle?: string;
        link?: string;
        target?: string;
      }>;
    }>;
  };
}
