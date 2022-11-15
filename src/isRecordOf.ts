import { isObject } from "./isObject.js";
import { NarrowFunc } from "./types.js";

export const isRecordOf =
  <Target>(f: NarrowFunc<Target>) =>
  (target: unknown): target is Record<string | number | symbol, Target> =>
    isObject(target) && Object.values(target).every((i) => f(i));
