import type { UnionOfTypesFromNarrowFuncFixedArray } from "./types.js";
import { NarrowFunc } from "./types.js";

export const isUnionOf =
  <T extends NarrowFunc<unknown>[]>(...args: T) =>
  (target: unknown): target is UnionOfTypesFromNarrowFuncFixedArray<T> =>
    args.every((f) => f(target));
