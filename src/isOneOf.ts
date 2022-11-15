import type { TypesFromNarrowFuncFixedArray } from "./types.js";
import { NarrowFunc } from "./types.js";

export const isOneOf =
  <T extends NarrowFunc<unknown>[]>(...args: T) =>
  (target: unknown): target is TypesFromNarrowFuncFixedArray<T> =>
    args.some((f) => f(target));
