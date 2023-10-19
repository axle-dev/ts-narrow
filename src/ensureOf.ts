import type { NarrowOf } from "./types.js";

export const ensureOf =
  <T, Target>(f: NarrowOf<T>) =>
  (
    target: Target,
    error: string | Error = "This value was promised to be there."
  ): T & Target => {
    if (f(target)) {
      return target;
    }

    throw error instanceof Error ? error : new Error(error);
  };
