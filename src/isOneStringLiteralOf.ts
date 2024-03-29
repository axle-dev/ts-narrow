import type { TypesFromFixedArray } from "./types.js";

export const isOneStringLiteralOf =
  <T extends string[]>(...args: T) =>
  (target: unknown): target is TypesFromFixedArray<T> =>
    args.some((f) => target === f);
