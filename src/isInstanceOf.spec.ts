import { isInstanceOf } from "./isInstanceOf.js";

class Etc {
  a = 10;
  b = "123";
}

describe("isEnumValueOf", () => {
  it("is truthy", () => {
    expect(isInstanceOf(Etc)(new Etc())).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isInstanceOf(Etc)(1)).toBeFalsy();
    expect(isInstanceOf(Etc)(2)).toBeFalsy();
    expect(isInstanceOf(Etc)(new Function())).toBeFalsy();
    expect(isInstanceOf(Etc)(function () {})).toBeFalsy();
  });
});
