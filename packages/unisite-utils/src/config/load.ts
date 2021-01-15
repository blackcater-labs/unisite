import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { Path, ConfigPathOptions } from "../path";

const CACHE: Map<string, unknown> = new Map();

export function load(module: string, options?: ConfigPathOptions): unknown {
  if (CACHE.has(module)) return CACHE.get(module);

  const filePath = Path.config(module, options);

  if (!filePath) return undefined;

  const data = parse(filePath);

  CACHE.set(module, data);

  return data;
}

function parse(filePath: string): unknown {
  const ext = path.extname(filePath);
  const parserMap: { [key: string]: (path: string) => unknown } = {
    ".yaml": parseYAML,
    ".yml": parseYAML,
    ".json": parseJSON,
    ".js": parseJS,
  };

  return parserMap[ext]?.(filePath);
}

function parseJS(filePath: string): unknown {
  return require(filePath);
}

function parseJSON(filePath: string): unknown {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function parseYAML(filePath: string): unknown {
  return yaml.load(fs.readFileSync(filePath, "utf8"));
}
