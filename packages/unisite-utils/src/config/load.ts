import { existsSync, readFile, statSync } from "fs";
import path from "path";
import { defaults } from "lodash";
import yaml from "js-yaml";

export interface LoadOptions {
  relativePath?: string;
  rootPath?: string;
  shouldSkip?: (path: string) => boolean;
  registers?: Map<string, (path: string) => Promise<unknown>>;
}

export const defaultRegisters = new Map();

defaultRegisters.set("yaml", registerYAML);
defaultRegisters.set("yml", registerYAML);
defaultRegisters.set("js", registerJS);
defaultRegisters.set("json", registerJSON);

const CACHE: Map<string, unknown> = new Map();

/**
 * Load config file
 *
 * @param module
 * @param options
 */
export async function load(module: string, options: LoadOptions): unknown {
  if (CACHE.has(module)) return Promise.resolve(CACHE.get(module));

  const { relativePath, rootPath, shouldSkip, registers } = defaults(options, {
    relativePath: ".",
    rootPath: process.cwd(),
    shouldSkip: () => false,
    registers: defaultRegisters,
  });
  const extensions = [...registers.keys()];
  let root = rootPath;
  let fileDir = path.resolve(root, relativePath);

  while (root !== "/") {
    if (!shouldSkip(root)) {
      for (const ext of extensions) {
        const filePath = path.resolve(fileDir, `${module}.${ext}`);
        const register = registers.get(ext);

        if (existsSync(filePath) && statSync(filePath).isFile()) {
          const data = await register(filePath);

          CACHE.set(module, data);

          return data;
        }
      }
    }
    root = path.resolve(rootPath, "..");
    fileDir = path.resolve(root, relativePath);
  }

  return undefined;
}

async function registerJS(path: string): Promise<unknown> {
  return new Promise<unknown>((resolve) => {
    try {
      resolve(require(path));
    } catch (err) {
      resolve(undefined);
    }
  });
}

async function registerJSON(path: string): Promise<unknown> {
  return new Promise<unknown>((resolve) => {
    readFile(path, (err, data) => {
      if (err) {
        return resolve(undefined);
      }

      const content = data.toString("utf8");

      try {
        resolve(JSON.parse(content));
      } catch (err) {
        resolve(undefined);
      }
    });
  });
}

async function registerYAML(path: string): Promise<unknown> {
  return new Promise<unknown>((resolve) => {
    readFile(path, (err, data) => {
      if (err) {
        return resolve(undefined);
      }

      const content = data.toString("utf8");

      try {
        resolve(yaml.load(content));
      } catch (err) {
        resolve(undefined);
      }
    });
  });
}
