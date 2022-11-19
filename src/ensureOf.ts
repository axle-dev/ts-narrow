import type { NarrowFunc } from "./types";

export const ensureOf =
  <T, Target>(f: NarrowFunc<T>) =>
  (
    target: Target,
    error: string | Error = "This value was promised to be there."
  ): T & Target => {
    if (f(target)) {
      return target;
    }

    throw error instanceof Error ? error : new Error(error);
  };
