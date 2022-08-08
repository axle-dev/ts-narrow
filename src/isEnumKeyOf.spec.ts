import { isEnumKeyOf } from "./isEnumKeyOf.js";

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

describe("isEnumKeyOf", () => {
  it("passes if target is keyof enum", () => {
    expect(isEnumKeyOf(NumberEnum)(0)).toBeTruthy();
    expect(isEnumKeyOf(NumberEnum)(1)).toBeTruthy();
    expect(isEnumKeyOf(NumberEnum)(2)).toBeTruthy();
    expect(isEnumKeyOf(NumberEnum)(247)).toBeTruthy();
    expect(isEnumKeyOf(NumberEnum)("A")).toBeTruthy();
    expect(isEnumKeyOf(NumberEnum)("B")).toBeTruthy();
    expect(isEnumKeyOf(NumberEnum)("C")).toBeTruthy();
    expect(isEnumKeyOf(NumberEnum)("D")).toBeTruthy();

    expect(isEnumKeyOf(StringEnum)("A")).toBeTruthy();
    expect(isEnumKeyOf(StringEnum)("B")).toBeTruthy();
    expect(isEnumKeyOf(StringEnum)("C")).toBeTruthy();
  });
  it("fails if target is not keyof enum", () => {
    expect(isEnumKeyOf(NumberEnum)(3)).toBeFalsy();
    expect(isEnumKeyOf(NumberEnum)("F")).toBeFalsy();
    expect(isEnumKeyOf(StringEnum)("D")).toBeFalsy();
  });
});
