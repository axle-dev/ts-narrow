import { NarrowFunc } from "./types.js";

export const isArrayOf =
  <Target>(f: NarrowFunc<Target>) =>
  (target: unknown): target is Target[] =>
    target instanceof Array && target.every(f);
