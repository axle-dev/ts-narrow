import type { OneOfTypesFromNarrowFuncFixedArray } from "./types.js";
import { NarrowOf } from "./types.js";

export const isOneOf =
  <T extends NarrowOf<unknown>[]>(...args: T) =>
  (target: unknown): target is OneOfTypesFromNarrowFuncFixedArray<T> =>
    args.some((f) => f(target));
