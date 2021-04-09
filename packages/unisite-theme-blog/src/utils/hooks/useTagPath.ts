import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useTagPath(name: string): string {
  const config = useCoreConfig();

  return `${get(config, "tagPrefix")}/${encodeURIComponent(name)}`;
}
