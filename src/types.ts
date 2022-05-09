export type NarrowFunc<T> = (element: unknown) => element is T;

export type TypesFromNarrowTuple<T extends unknown> = T extends [
  (target: unknown) => target is infer Head
]
  ? Head
  : T extends [(target: unknown) => target is infer Head, ...infer Tail]
  ? Head | TypesFromNarrowTuple<Tail>
  : never;
