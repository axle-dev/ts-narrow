import { ensureOf } from "./ensureOf.js";
import { isString } from "./isString.js";
import { isNumber } from "./isNumber.js";
import { isObjectOf } from "./isObjectOf.js";
import { hasElementsOf } from "./hasElementsOf.js";

const a: unknown = "123";
const b: unknown = {
  num: 10,
  str: "qwezxc",
  arr: [5, "3"],
};

describe("ensureOf", () => {
  it("not throws", () => {
    expect(() => ensureOf(isString)(a)).not.toThrow();
    expect(() =>
      ensureOf(
        isObjectOf({
          num: isNumber,
          str: isString,
          arr: hasElementsOf([isNumber, isString]),
        })
      )(b)
    ).not.toThrow();
  });
  it("throws", () => {
    expect(() => ensureOf(isNumber)(a)).toThrow();
  });
});
