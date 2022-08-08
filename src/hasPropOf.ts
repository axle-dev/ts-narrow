import { NarrowFunc } from "./types.js";
import { hasProp } from "./hasProp.js";

export const hasPropOf =
  <PropName extends string | symbol | number, NextTarget>(
    propName: PropName,
    f: NarrowFunc<NextTarget>
  ) =>
  (target: unknown): target is { [K in PropName]: NextTarget } =>
    hasProp(propName)(target) && f(target[propName]);
