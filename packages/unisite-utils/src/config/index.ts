import { root } from "./root";
import { get } from "./get";
import { set } from "./set";

export interface Config {
  root: (keyPath: string, value: any) => Promise<unknown>;
  get: (module: string, keyPath: string) => Promise<unknown>;
  set: (module: string, keyPath: string, value: any) => Promise<unknown>;
}

/**
 * Config
 */
export const Config: Config = {
  root,
  get,
  set,
};
