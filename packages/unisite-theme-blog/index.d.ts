export * from "@unisite/core-blog";
export * from "./src/types";

export type UnisiteThemeBlogConfig = {
  header?: {
    bar?: {
      text?: string;
      closable?: boolean;
    };
    nav?: {
      title?: string;
      link?: string;
      target?: string;
      items?: {
        title?: string;
        subTitle?: string;
        link?: string;
        target?: string;
      }[];
    }[];
  };
};
