import { isNumber } from "./isNumber";
import { isOneOf } from "./isOneOf";
import { isString } from "./isString";

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
