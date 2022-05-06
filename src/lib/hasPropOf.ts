import { NarrowFunc } from "../types";
import { hasProp } from "./hasProp";

export const hasPropOf =
  <PropName extends string | symbol | number, NextTarget>(
    propName: PropName,
    f: NarrowFunc<NextTarget>
  ) =>
  (target: unknown): target is { [K in PropName]: NextTarget } =>
    hasProp(propName)(target) && f(target[propName]);
