import { isTruthy } from "./isTruthy.js";

describe("isTruthy", () => {
  it("is truthy", () => {
    expect(isTruthy(0)).toBeTruthy();
    expect(isTruthy("")).toBeTruthy();
    expect(isTruthy([])).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isTruthy(null)).toBeFalsy();
    expect(isTruthy(undefined)).toBeFalsy();
  });
});
