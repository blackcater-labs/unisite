import fs from "fs-extra";

export function createFileSync(path: string): void {
  return fs.createFileSync(path);
}
