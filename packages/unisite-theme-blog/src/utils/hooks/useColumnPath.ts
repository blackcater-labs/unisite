import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useColumnPath(name: string): string {
  const config = useCoreConfig();

  return `${get(config, "columnPrefix")}/${encodeURIComponent(name)}`;
}
