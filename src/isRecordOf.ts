import { isObject } from "./isObject.js";
import { NarrowFunc } from "./types.js";

export const isRecordOf =
  <T>(f: NarrowFunc<T>) =>
  (target: unknown): target is Record<string | number | symbol, T> =>
    isObject(target) && Object.values(target).every((i) => f(i));
