import { assert } from "./assert.js";
import type { NarrowOf } from "./types.js";

export const assertOf: <T>(
  target: unknown,
  f: NarrowOf<T>,
  error?: string | Error
) => asserts target is T = (target, f, error) => {
  assert(f(target), error)!;
};
