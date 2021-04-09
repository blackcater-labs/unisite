import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useTagListPath(page?: string | number): string {
  const config = useCoreConfig();

  return page == null
    ? `${get(config, "tagListPrefix")}`
    : `${get(config, "tagListPrefix")}/${encodeURIComponent(page)}`;
}
