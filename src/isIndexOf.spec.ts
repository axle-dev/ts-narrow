import { isIndexOf } from "./isIndexOf.js";

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

const obj = {
  a: "ASD",
  z: "ZXC",
  q: "QWE",
};

describe("isIndexOf", () => {
  it("is truthy", () => {
    expect(isIndexOf(NumberEnum)(0)).toBeTruthy();
    expect(isIndexOf(NumberEnum)(1)).toBeTruthy();
    expect(isIndexOf(NumberEnum)(2)).toBeTruthy();
    expect(isIndexOf(NumberEnum)(247)).toBeTruthy();
    expect(isIndexOf(NumberEnum)("A")).toBeTruthy();
    expect(isIndexOf(NumberEnum)("B")).toBeTruthy();
    expect(isIndexOf(NumberEnum)("C")).toBeTruthy();
    expect(isIndexOf(NumberEnum)("D")).toBeTruthy();

    expect(isIndexOf(StringEnum)("A")).toBeTruthy();
    expect(isIndexOf(StringEnum)("B")).toBeTruthy();
    expect(isIndexOf(StringEnum)("C")).toBeTruthy();

    expect(isIndexOf(obj)("a")).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isIndexOf(NumberEnum)(3)).toBeFalsy();
    expect(isIndexOf(NumberEnum)("F")).toBeFalsy();
    expect(isIndexOf(StringEnum)("D")).toBeFalsy();

    expect(isIndexOf(obj)("x")).toBeFalsy();
  });
});
