import { NarrowOf } from "./types.js";
import { hasElementAt } from "./hasElementAt.js";

export const hasElementAtOf =
  <T, Pos extends number, Obj extends { [K in Pos]: T } = { [K in Pos]: T }>(
    at: Pos,
    f: NarrowOf<T>
  ) =>
  (target: unknown): target is Obj =>
    hasElementAt(at)(target) && f(target[at]);
