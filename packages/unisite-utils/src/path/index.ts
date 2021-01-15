import { getRootPath } from "./getRootPath";
import { getConfigPath, ConfigPathOptions } from "./getConfigPath";

export { ConfigPathOptions };

export interface Path {
  root: () => string;
  config: (module: string, options?: ConfigPathOptions) => string;
}

/**
 * Path
 */
export const Path: Path = {
  root: getRootPath,
  config: getConfigPath,
};
