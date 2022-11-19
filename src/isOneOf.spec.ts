import { isNumber } from "./isNumber.js";
import { isOneOf } from "./isOneOf.js";
import { isString } from "./isString.js";

describe("isOneOf", () => {
  it("is truthy", () => {
    expect(isOneOf(isString)("a")).toBeTruthy();
    expect(isOneOf(isNumber, isString)("b")).toBeTruthy();
    expect(isOneOf(isNumber, isString)(1)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isOneOf(isString)(1)).toBeFalsy();
    expect(isOneOf(isNumber)("asd")).toBeFalsy();
    expect(isOneOf(isNumber, isString)({})).toBeFalsy();
  });
});
