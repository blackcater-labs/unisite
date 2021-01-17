import { get as _get } from "lodash";
import { load } from "./load";
import { Path } from "../path";

export function get(
  module: string,
  keyPath?: string,
  defaultValue?: unknown
): unknown {
  const data = load(module, { rootDir: Path.root() });

  return !keyPath ? data : _get(data, keyPath, defaultValue);
}
