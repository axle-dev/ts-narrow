import { NarrowFunc } from "./types";
import { hasElementAt } from "./hasElementAt";

export const hasElementAtOf =
  <T, Pos extends number, Obj extends { [K in Pos]: T } = { [K in Pos]: T }>(
    at: Pos,
    f: NarrowFunc<T>
  ) =>
  (target: unknown): target is Obj =>
    hasElementAt(at)(target) && f(target[at]);
