import { NarrowOf } from "./types.js";
import { hasProp } from "./hasProp.js";

export const hasPropOf =
  <PropName extends string | symbol | number, Target>(
    propName: PropName,
    f: NarrowOf<Target>
  ) =>
  (target: unknown): target is { [K in PropName]: Target } =>
    hasProp(propName)(target) && f(target[propName]);
