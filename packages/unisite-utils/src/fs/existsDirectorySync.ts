import fs from "fs";

export function existsDirectorySync(path: string): boolean {
  return fs.existsSync(path) && fs.statSync(path).isDirectory();
}
