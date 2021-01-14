import { promisify } from "./promisify";

export interface Utils {
  promisify: <T extends Function, R>(
    callbackFn: T
  ) => (...args: any[]) => Promise<R>;
}

export const Utils: Utils = {
  promisify,
};
