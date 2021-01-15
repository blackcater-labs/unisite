import fs from "fs";

export function existsFileSync(path: string): boolean {
  return fs.existsSync(path) && fs.statSync(path).isFile();
}
