import { getRoot } from "./getRoot";

export interface Path {
  getRoot: () => string;
}

/**
 * Path
 */
export const Path: Path = {
  getRoot,
};
