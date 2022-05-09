import { NarrowFunc } from "./types";

export const isArrayOf =
  <NextTarget>(f: NarrowFunc<NextTarget>) =>
  (target: unknown): target is NextTarget[] =>
    target instanceof Array && target.every(f);
