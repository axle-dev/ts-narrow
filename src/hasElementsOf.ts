import { isArray } from "./isArray.js";
import type { NarrowOf, FixedArrayValues } from "./types.js";

export const hasElementsOf =
  <NarrowFuncFixedArray extends readonly NarrowOf<unknown>[]>(
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
