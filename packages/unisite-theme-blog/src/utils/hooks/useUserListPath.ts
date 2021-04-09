import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useUserListPath(page?: string | number): string {
  const config = useCoreConfig();

  return page == null
    ? `${get(config, "userListPrefix")}`
    : `${get(config, "userListPrefix")}/${encodeURIComponent(page)}`;
}
