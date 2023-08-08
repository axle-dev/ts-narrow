import { NarrowOf } from "./types.js";

export const isArrayOf =
  <Target>(f: NarrowOf<Target>) =>
  (target: unknown): target is Target[] =>
    target instanceof Array && target.every(f);
