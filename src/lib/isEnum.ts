import { hasPropOf } from "./hasPropOf";
import { isNumber } from "./isNumber";
import { isObject } from "./isObject";
import { isString } from "./isString";

export const isEnum = <T extends Record<string, string | number>>(
  target: unknown
): target is T => {
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
