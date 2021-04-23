import path from "path";
import { Env } from "../env";
import { FS } from "../fs";
import { getRootPath } from "./getRootPath";

export function getConfigPath(): string {
  const n = Env.UNISITE_CONFIG_EXTENSIONS.length;

  for (let i = 0; i < n; i++) {
    const fileName = `${Env.UNISITE_CONFIG_NAME}${Env.UNISITE_CONFIG_EXTENSIONS[i]}`;
    const filePath = path.resolve(getRootPath(), fileName);
    if (FS.existsFileSync(filePath)) return filePath;
  }

  // Cannot find configuration file
  return "";
}
