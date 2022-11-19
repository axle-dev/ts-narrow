import { ensureOf } from "./ensureOf.js";
import { isString } from "./isString.js";
import { isNumber } from "./isNumber.js";
import { isObject } from "./isObject.js";
import { isArray } from "./isArray.js";
import { isBoolean } from "./isBoolean.js";
import { isTruthy } from "./isTruthy.js";

describe("ensureOf", () => {
  it("is truthy", () => {
    expect(() => ensureOf(isNumber)(0)).not.toThrow();
    expect(() => ensureOf(isString)("")).not.toThrow();
    expect(() => ensureOf(isObject)({})).not.toThrow();
    expect(() => ensureOf(isArray)([])).not.toThrow();
    expect(() => ensureOf(isBoolean)(false)).not.toThrow();
  });
  it("is falsy", () => {
    expect(() => ensureOf(isString)(null)).toThrow();
    expect(() => ensureOf(isTruthy)(undefined)).toThrow();
  });
});
