export type NarrowOf<T> = (element: unknown) => element is T;

export type TypesFromFixedArray<T extends unknown> = T extends [infer Head]
  ? Head
  : T extends [infer Head, ...infer Tail]
  ? Head | TypesFromFixedArray<Tail>
  : never;

export type OneOfTypesFromNarrowFuncFixedArray<T extends unknown> = T extends [
  (target: unknown) => target is infer Head
]
  ? Head
  : T extends [(target: unknown) => target is infer Head, ...infer Tail]
  ? Head | OneOfTypesFromNarrowFuncFixedArray<Tail>
  : never;

export type UnionOfTypesFromNarrowFuncFixedArray<T extends unknown> =
  T extends [(target: unknown) => target is infer Head]
    ? Head
    : T extends [(target: unknown) => target is infer Head, ...infer Tail]
    ? Head & UnionOfTypesFromNarrowFuncFixedArray<Tail>
    : never;

export type FixedArrayValues<T extends unknown> = T extends [
  (target: unknown) => target is infer Head
]
  ? [Head]
  : T extends [(target: unknown) => target is infer Head, ...infer Tail]
  ? [Head, ...FixedArrayValues<Tail>]
  : never;

export type InferNarrow<T> = T extends NarrowOf<infer U> ? U : T;
