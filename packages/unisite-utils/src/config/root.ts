import { get } from "./get";
import { set } from "./set";

export const ROOT_NAME = "unisite";

export async function root(keyPath: string, value: any): Promise<unknown> {
  if (value) return set(ROOT_NAME, keyPath, value);
  return get(ROOT_NAME, keyPath);
}
