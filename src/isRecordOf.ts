import { isObject } from "./isObject.js";
import { NarrowOf } from "./types.js";

export const isRecordOf =
  <Target>(f: NarrowOf<Target>) =>
  (
    target: unknown
  ): target is typeof target extends Record<infer TKeys, any>
    ? Record<TKeys, Target>
    : Record<string | number | symbol, Target> =>
    isObject(target) && Object.values(target).every((i) => f(i));
