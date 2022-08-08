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
  it("correctly see if enum has value of", () => {
    expect(isEnumValueOf(NumberEnum)(0)).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)(1)).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)(2)).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)(247)).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)("A")).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)("B")).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)("C")).toBeTruthy();
    expect(isEnumValueOf(NumberEnum)("D")).toBeTruthy();
  });
  it("fails if enum doesn.t have value of", () => {
    expect(isEnumValueOf(NumberEnum)("X")).toBeFalsy();
    expect(isEnumValueOf(NumberEnum)(3)).toBeFalsy();
  });
});
