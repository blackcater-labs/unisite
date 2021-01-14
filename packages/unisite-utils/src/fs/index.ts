import { existsFile, existsFileSync } from "./existsFile";
import { existsDirectory, existsDirectorySync } from "./existsDirectory";

export interface FS {
  existsFile: (path: string) => Promise<boolean>;
  existsFileSync: (path: string) => boolean;
  existsDirectory: (path: string) => Promise<boolean>;
  existsDirectorySync: (path: string) => boolean;
}

export const FS: FS = {
  existsFile,
  existsFileSync,
  existsDirectory,
  existsDirectorySync,
};
