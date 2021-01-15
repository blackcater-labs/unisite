import fs from "fs-extra";

export function mkdirSync(path: string): void {
  fs.mkdirsSync(path);
}
