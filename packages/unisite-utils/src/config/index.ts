import { get } from "./get";

export interface Config {
  get: (module: string, keyPath: string, defaultValue?: unknown) => unknown;
}

/**
 * Config
 */
export const Config: Config = {
  get,
};
