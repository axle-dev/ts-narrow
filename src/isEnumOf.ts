import { isEnum } from "./isEnum.js";
import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const isEnumOf =
  <Target extends Record<string, string | number>>(enumToCompare: Target) => {
    const narrow = (target: unknown): target is Target =>
      isEnum(target) &&
      Object.entries(target).every(
        ([targetProp, targetValue]) => enumToCompare[targetProp] === targetValue
      ) &&
      Object.entries(enumToCompare).every(
        ([enumToCompareProp, enumToCompareValue]) =>
          target[enumToCompareProp] === enumToCompareValue
      );

    return withValidation(narrow, (target, path) =>
      narrow(target)
        ? []
        : [
            createValidationIssue(
              path,
              "invalid_enum",
              "matching enum object",
              target
            ),
          ]
    );
  };
