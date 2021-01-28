import { kebabCase } from "lodash";

const UI_PREFIX = "uni";

export function prefixCls(name: string = "") {
  return name ? kebabCase([UI_PREFIX, name].join("-")) : UI_PREFIX;
}
