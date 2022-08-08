import { isNumber } from "./isNumber.js";
import { isOneOf } from "./isOneOf.js";
import { isString } from "./isString.js";

describe("isOneOf", () => {
  it("passes if target is one of", () => {
    expect(isOneOf(isString)("a")).toBeTruthy();
    expect(isOneOf(isNumber, isString)("b")).toBeTruthy();
    expect(isOneOf(isNumber, isString)(1)).toBeTruthy();
  });
  it("fails if target is not one of", () => {
    expect(isOneOf(isString)(1)).toBeFalsy();
    expect(isOneOf(isNumber)("asd")).toBeFalsy();
    expect(isOneOf(isNumber, isString)({})).toBeFalsy();
  });
});
