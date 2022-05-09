export const isEnumKeyOf =
  <T>(enumToCompare: T) =>
  (target: string | number | symbol): target is keyof T =>
    target in enumToCompare;
