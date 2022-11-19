import { isEnumValueOf } from "./isEnumValueOf.js";

enum NumberEnum {
  A,
  B,
  C,
  D = 247,
}

enum StringEnum {
  A = "a",
  B = "b",
  C = "QWE",
}

describe("isEnumValueOf", () => {
  it("is truthy", () => {
    expect(isEnumValueOf(NumberEnum)(0)).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)(1)).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)(2)).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)(247)).toBeTruthy();
    expect(isEnumValueOf(StringEnum)("a")).toBeTruthy();
    expect(isEnumValueOf(StringEnum)("b")).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)("C")).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)("D")).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isEnumValueOf(NumberEnum)("X")).toBeFalsy();
    expect(isEnumValueOf(NumberEnum)(3)).toBeFalsy();
  });
});
