import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useColumnListPath(page?: string | number): string {
  const config = useCoreConfig();

  return page == null
    ? `${get(config, "columnListPrefix")}`
    : `${get(config, "columnListPrefix")}/${encodeURIComponent(page)}`;
}
