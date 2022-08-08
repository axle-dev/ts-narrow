import { isEnumOf } from "./isEnumOf.js";

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

describe("isEnumOf", () => {
  it("correctly infers if target and enum have exactly the same props and values", () => {
    expect(
      isEnumOf(NumberEnum)({
        0: "A",
        1: "B",
        2: "C",
        247: "D",
        A: 0,
        B: 1,
        C: 2,
        D: 247,
      })
    ).toBeTruthy();
    expect(isEnumOf({ A: "a", B: "b", C: "QWE" })(StringEnum)).toBeTruthy();
  });
  it("fails if target and enum doesn't have exactly the same props and values", () => {
    expect(
      isEnumOf(NumberEnum)({
        A: 0,
        B: 1,
        C: 2,
        D: 247,
      })
    ).toBeFalsy();
    expect(
      isEnumOf(NumberEnum)({
        0: "A",
        1: "B",
        2: "C",
        247: "D",
      })
    ).toBeFalsy();
    expect(isEnumOf(StringEnum)({ A: "a", B: "b", C: "WRONG" })).toBeFalsy();
    expect(isEnumOf(StringEnum)({ A: "a", B: "b" })).toBeFalsy();
  });
});
