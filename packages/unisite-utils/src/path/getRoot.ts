import fs from "fs";
import path from "path";

/**
 * Universal method for getting root path.
 */
export function getRoot(): string {
  let root = process.cwd();
  let unisiteYamlPath = path.resolve(root, "unisite.yaml");

  while (
    !fs.existsSync(unisiteYamlPath) ||
    !fs.statSync(unisiteYamlPath).isFile()
  ) {
    root = path.resolve(root, "..");
    unisiteYamlPath = path.resolve(root, "unisite.yaml");
  }

  return root;
}
