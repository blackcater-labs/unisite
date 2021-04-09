import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useUserPath(name: string): string {
  const config = useCoreConfig();

  return `${get(config, "userPrefix")}/${encodeURIComponent(name)}`;
}
