import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useCategoryListPath(page?: string | number): string {
  const config = useCoreConfig();

  return page == null
    ? `${get(config, "categoryListPrefix")}`
    : `${get(config, "categoryListPrefix")}/${encodeURIComponent(page)}`;
}
