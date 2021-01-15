import { existsFileSync } from "./existsFileSync";
import { existsDirectorySync } from "./existsDirectorySync";
import { mkdirSync } from "./mkdirSync";

export interface FS {
  existsFileSync: (path: string) => boolean;
  existsDirectorySync: (path: string) => boolean;
  mkdirSync: (path: string) => void;
}

export const FS: FS = {
  existsFileSync,
  existsDirectorySync,
  mkdirSync,
};
