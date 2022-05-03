import { NarrowFunc } from "types";
import { hasProp } from "./hasProp";

export const hasPropOf =
  <U extends string, T>(propName: U, f: NarrowFunc<T>) =>
  (target: unknown): target is { [K in U]: T } =>
    hasProp(propName)(target) && f(target[propName]);
