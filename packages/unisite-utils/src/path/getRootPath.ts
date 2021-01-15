import path from "path";
import { Env } from "../env";
import { FS } from "../fs";

export function getRootPath(): string {
  let root = process.cwd();
  let configPath = path.resolve(root, Env.UNISITE_CONFIG);

  while (root !== "/" && !FS.existsFileSync(configPath)) {
    root = path.resolve(root, "..");
    configPath = path.resolve(root, "unisite.yaml");
  }

  return root === "/" ? process.cwd() : root;
}
