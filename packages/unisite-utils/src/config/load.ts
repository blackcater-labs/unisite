import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function load<T extends any>(filePath: string): T | undefined {
  if (!filePath) return undefined;

  return parse(filePath);
}

function parse<T extends any>(filePath: string): T | undefined {
  const ext = path.extname(filePath);
  const parserMap: { [key: string]: (path: string) => T } = {
    ".yaml": parseYAML,
    ".yml": parseYAML,
    ".json": parseJSON,
    ".js": parseJS,
  };

  return parserMap[ext]?.(filePath);
}

function parseJS<T extends any>(filePath: string): T {
  return require(filePath);
}

function parseJSON<T extends any>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function parseYAML<T extends any>(filePath: string): T {
  return yaml.load(fs.readFileSync(filePath, "utf8")) as T;
}
