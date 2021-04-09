import { get } from "lodash";

import { useCoreConfig } from "./useCoreConfig";

export function usePostPath(name: string): string {
  const config = useCoreConfig();

  return `${get(config, "postPrefix")}/${encodeURIComponent(name)}`;
}
