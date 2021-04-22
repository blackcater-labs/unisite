import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useArchivesPath(page?: string | number): string {
  const config = useCoreConfig();

  return page == null
    ? `${get(config, "archivesPrefix")}`
    : `${get(config, "archivesPrefix")}/${encodeURIComponent(page)}`;
}
