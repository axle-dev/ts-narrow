import { isBoolean } from "./isBoolean.js";

describe("isBoolean", () => {
  it("is truthy", () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean(1 > 2)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isBoolean("1")).toBeFalsy();
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean(undefined)).toBeFalsy();
    expect(isBoolean("")).toBeFalsy();
    expect(isBoolean(0)).toBeFalsy();
  });
});
