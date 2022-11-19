import { isArray } from "./isArray.js";
import type { NarrowFunc, FixedArrayValues } from "./types";

export const hasElementsOf =
  <NarrowFuncFixedArray extends readonly NarrowFunc<unknown>[]>(
    elements: NarrowFuncFixedArray
  ) =>
  (target: unknown): target is FixedArrayValues<NarrowFuncFixedArray> => {
    if (!isArray(target)) return false;
    if (elements.length !== target.length) return false;
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i](target[i])) {
        return false;
      }
    }

    return true;
  };
