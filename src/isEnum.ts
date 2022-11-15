import { hasPropOf } from "./hasPropOf.js";
import { isNumber } from "./isNumber.js";
import { isObject } from "./isObject.js";
import { isString } from "./isString.js";

export const isEnum = <Target extends Record<string, string | number>>(
  target: unknown
): target is Target => {
  if (!(target instanceof Array) && isObject(target)) {
    const entries = Object.entries(target);
    if (
      entries.length !== 0 &&
      entries.every(
        ([key, value]) =>
          typeof key === "string" &&
          (typeof value === "string" || typeof value === "number") &&
          ((isNumber(value) &&
            hasPropOf(value, isString)(target) &&
            target[value] === key) ||
            isString(value))
      )
    ) {
      return true;
    }
  }
  return false;
};
