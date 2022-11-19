import { isEnum } from "./isEnum.js";

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
  it("is truthy", () => {
    expect(isEnum(NumberEnum)).toBeTruthy();
    expect(isEnum(StringEnum)).toBeTruthy();
    expect(isEnum({ A: "a", B: "b", C: "QWE" })).toBeTruthy();
    expect(isEnum({ A: 0, 0: "A" })).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isEnum({ A: 0 })).toBeFalsy();
    expect(isEnum([])).toBeFalsy();
    expect(isEnum(Array)).toBeFalsy();
    expect(isEnum(String)).toBeFalsy();
    expect(isEnum({})).toBeFalsy();
  });
});
