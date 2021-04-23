import { getRootPath } from "./getRootPath";
import { getConfigPath } from "./getConfigPath";

export const Path = {
  get rootPath(): string {
    return getRootPath();
  },
  get configPath(): string {
    return getConfigPath();
  },
};
