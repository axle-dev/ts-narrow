import { isEnum } from "./isEnum.js";

export const isEnumOf =
  <Target extends Record<string, string | number>>(enumToCompare: Target) =>
  (target: unknown): target is Target => {
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
