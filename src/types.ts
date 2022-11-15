export type NarrowFunc<T> = (element: unknown) => element is T;

export type TypesFromFixedArray<T extends unknown> = T extends [infer Head]
  ? Head
  : T extends [infer Head, ...infer Tail]
  ? Head | TypesFromFixedArray<Tail>
  : never;

export type TypesFromNarrowFuncFixedArray<T extends unknown> = T extends [
  (target: unknown) => target is infer Head
]
  ? Head
  : T extends [(target: unknown) => target is infer Head, ...infer Tail]
  ? Head | TypesFromNarrowFuncFixedArray<Tail>
  : never;

export type FixedArrayValues<T extends unknown> = T extends [
  (target: unknown) => target is infer Head
]
  ? [Head]
  : T extends [(target: unknown) => target is infer Head, ...infer Tail]
  ? [Head, ...FixedArrayValues<Tail>]
  : never;
