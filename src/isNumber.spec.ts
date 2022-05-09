import { isNumber } from "./isNumber";

describe("isNumber", () => {
  it("infers an object", () => {
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(Number())).toBeTruthy();
    expect(isNumber(NaN)).toBeTruthy();
    expect(isNumber(0x123)).toBeTruthy();
  });
  it("fails for not object", () => {
    expect(isNumber([])).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
  });
});
