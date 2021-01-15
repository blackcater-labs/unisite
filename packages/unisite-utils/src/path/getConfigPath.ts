import path from "path";
import { defaults } from "lodash";
import { Env } from "../env";
import { FS } from "../fs";

export interface ConfigPathOptions {
  relativePath?: string;
  rootDir?: string;
  shouldSkip?: (path: string) => boolean;
  extensions?: string[];
}

export function getConfigPath(
  module: string,
  options?: ConfigPathOptions
): string {
  const { relativePath, rootDir, shouldSkip, extensions } = defaults(options, {
    relativePath: ".",
    rootDir: process.cwd(),
    shouldSkip: () => false,
    extensions: Env.CONFIG_EXTENSIONS,
  });
  let root = rootDir;
  let dir = path.resolve(root, relativePath);

  while (root !== "/") {
    if (!shouldSkip(root) && !shouldSkip(dir)) {
      for (const ext of extensions) {
        const filePath = path.resolve(dir, `${module}${ext}`);

        if (FS.existsFileSync(filePath)) return filePath;
      }
    }
    root = path.resolve(root, "..");
    dir = path.resolve(root, relativePath);
  }

  return "";
}
