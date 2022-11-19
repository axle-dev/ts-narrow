import { isNumber } from "./isNumber.js";

describe("isNumber", () => {
  it("is truthy", () => {
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(Number())).toBeTruthy();
    expect(isNumber(NaN)).toBeTruthy();
    expect(isNumber(0x123)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isNumber([])).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
  });
});
