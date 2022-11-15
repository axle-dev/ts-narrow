export const isEnumKeyOf =
  <Target>(enumToCompare: Target) =>
  (target: string | number | symbol): target is keyof Target =>
    target in enumToCompare;
