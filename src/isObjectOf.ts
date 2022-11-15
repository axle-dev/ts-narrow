import { hasPropOf } from "./hasPropOf.js";
import { isObject } from "./isObject.js";
import { NarrowFunc } from "./types.js";

type TargetOfNarrow<Target> = Target extends NarrowFunc<infer U> ? U : never;
type NarrowAny = NarrowFunc<unknown>;
type NarrowFuncRecord = Record<string | symbol | number, NarrowAny>;

export const isObjectOf =
  <Target extends NarrowFuncRecord>(map: Target) =>
  (
    target: unknown
  ): target is { [K in keyof Target]: TargetOfNarrow<Target[K]> } =>
    isObject(target) &&
    Object.keys(map).every((key) => hasPropOf(key, map[key])(target));
