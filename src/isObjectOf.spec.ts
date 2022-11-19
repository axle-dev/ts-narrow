import { isString } from "./isString.js";
import { isNumber } from "./isNumber.js";
import { isObjectOf } from "./isObjectOf.js";
import { hasPropOf } from "./hasPropOf.js";
import { isArray } from "./isArray.js";

describe("isObjectOf", () => {
  it("is truthy", () => {
    expect(
      isObjectOf({ a: isString, b: isNumber, c: hasPropOf("d", isArray) })({
        a: "test",
        b: 123,
        c: { d: [] },
      })
    ).toBeTruthy();
    expect(isObjectOf({})({})).toBeTruthy();
    expect(isObjectOf({})({ a: isString })).toBeTruthy();
    expect(isObjectOf({})(null)).toBeTruthy();
    expect(isObjectOf({})([])).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isObjectOf({ a: isString })({ a: isNumber })).toBeFalsy();
    expect(isObjectOf({ a: isString })({})).toBeFalsy();
    expect(isObjectOf({})(undefined)).toBeFalsy();
  });
});
