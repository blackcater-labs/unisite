import type { ReactChild } from "react";

export type PageProps<
  Data extends Record<string, any> = any,
  Context extends Record<string, any> = any
> = {
  path: string;
  uri: string;
  params: Record<string, any>;
  navigate: (to: string, options?: any) => void;
  location: {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    key: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    state: Record<string, any>;
  };
  data: Data;
  pageContext: Context;
  children?: ReactChild;
};
