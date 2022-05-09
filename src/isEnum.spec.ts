import { isEnum } from "./isEnum";

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

describe("isEnum", () => {
  it("correctly infers an enum", () => {
    expect(isEnum(NumberEnum)).toBeTruthy();
    expect(isEnum(StringEnum)).toBeTruthy();
    expect(isEnum({ A: "a", B: "b", C: "QWE" })).toBeTruthy();
    expect(isEnum({ A: 0, 0: "A" })).toBeTruthy();
  });
  it("fails if stringEnum doesn't have value as key", () => {
    expect(isEnum({ A: 0 })).toBeFalsy();
    expect(isEnum([])).toBeFalsy();
    expect(isEnum(Array)).toBeFalsy();
    expect(isEnum(String)).toBeFalsy();
    expect(isEnum({})).toBeFalsy();
  });
});
