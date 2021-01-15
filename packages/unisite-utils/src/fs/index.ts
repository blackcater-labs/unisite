import { existsFileSync } from "./existsFileSync";

export interface FS {
  existsFileSync: (path: string) => boolean;
}

export const FS: FS = {
  existsFileSync,
};
