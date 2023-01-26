import { assert } from "./assert.js";
import { NarrowFunc } from "./types";

export const assertOf: <T>(
  target: unknown,
  f: NarrowFunc<T>,
  error?: string | Error
) => asserts target is T = (target, f, error) => {
  assert(f(target), error)!;
};
