import { existsSync, stat, statSync } from "fs";

export function existsFileSync(path: string): boolean {
  return existsSync(path) && statSync(path).isFile();
}

export async function existsFile(path: string): Promise<boolean> {
  if (!existsSync(path)) return false;

  return new Promise((resolve, reject) => {});
}
