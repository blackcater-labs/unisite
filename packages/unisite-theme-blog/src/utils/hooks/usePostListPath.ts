import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function usePostListPath(page?: string | number): string {
  const config = useCoreConfig();

  return page == null
    ? `${get(config, "postListPrefix")}`
    : `${get(config, "postListPrefix")}/${encodeURIComponent(page)}`;
}
