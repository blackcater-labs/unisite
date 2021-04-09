import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useArchiveListPath(page?: string | number): string {
  const config = useCoreConfig();

  return page == null
    ? `${get(config, "archiveListPrefix")}`
    : `${get(config, "archiveListPrefix")}/${encodeURIComponent(page)}`;
}
