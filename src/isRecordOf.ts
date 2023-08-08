import { isObject } from "./isObject.js";
import { NarrowOf } from "./types.js";

export const isRecordOf =
  <Target>(f: NarrowOf<Target>) =>
  (target: unknown): target is Record<string | number | symbol, Target> =>
    isObject(target) && Object.values(target).every((i) => f(i));
