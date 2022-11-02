import { isInstanceOf } from "./isInstanceOf.js";

class Etc {
  a = 10;
  b = "123";
}

describe("isEnumValueOf", () => {
  it("correctly see if enum has value of", () => {
    expect(isInstanceOf(Etc)(new Etc())).toBeTruthy();
  });
  it("fails if enum doesn.t have value of", () => {
    expect(isInstanceOf(Etc)(1)).toBeFalsy();
    expect(isInstanceOf(Etc)(2)).toBeFalsy();
    expect(isInstanceOf(Etc)(new Function())).toBeFalsy();
    expect(isInstanceOf(Etc)(function () {})).toBeFalsy();
  });
});
