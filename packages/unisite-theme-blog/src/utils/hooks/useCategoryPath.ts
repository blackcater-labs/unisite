import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function useCategoryPath(name: string): string {
  const config = useCoreConfig();

  return `${get(config, "categoryPrefix")}/${encodeURIComponent(name)}`;
}
