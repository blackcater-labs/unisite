import { get as _get } from "lodash";
import { load } from "./load";
import { Path } from "../path";

export function get(keyPath?: string, defaultValue?: unknown): unknown {
  const data = load(Path.configPath);

  return !keyPath ? data : _get(data, keyPath, defaultValue);
}
