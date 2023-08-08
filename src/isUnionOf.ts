import type { UnionOfTypesFromNarrowFuncFixedArray } from "./types.js";
import { NarrowOf } from "./types.js";

export const isUnionOf =
  <T extends NarrowOf<unknown>[]>(...args: T) =>
  (target: unknown): target is UnionOfTypesFromNarrowFuncFixedArray<T> =>
    args.every((f) => f(target));
