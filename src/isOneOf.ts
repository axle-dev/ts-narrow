import { NarrowFunc } from "./types";

type TypesFromNarrowTuple<T extends unknown> = T extends [
  (target: unknown) => target is infer Head
]
  ? Head
  : T extends [(target: unknown) => target is infer Head, ...infer Tail]
  ? Head | TypesFromNarrowTuple<Tail>
  : never;

export const isOneOf =
  <U, T extends NarrowFunc<U>[]>(...args: T) =>
  (target: unknown): target is TypesFromNarrowTuple<T> =>
    args.some((f) => f(target));
