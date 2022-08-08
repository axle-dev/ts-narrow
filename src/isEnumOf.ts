import { isEnum } from "./isEnum.js";

export const isEnumOf =
  <T extends Record<string, string | number>>(enumToCompare: T) =>
  (target: unknown): target is T => {
    return (
      isEnum(target) &&
      Object.entries(target).every(
        ([targetProp, targetValue]) => enumToCompare[targetProp] === targetValue
      ) &&
      Object.entries(enumToCompare).every(
        ([enumToCompareProp, enumToCompareValue]) =>
          target[enumToCompareProp] === enumToCompareValue
      )
    );
  };
