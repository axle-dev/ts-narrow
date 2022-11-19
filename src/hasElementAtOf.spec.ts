import { hasElementAtOf } from "./hasElementAtOf.js";
import { isNumber } from "./isNumber.js";
import { isObject } from "./isObject.js";
import { isString } from "./isString.js";

const nestedArrays: unknown = [1, "asd", [5, 6, ["asd"]]];

const posts: unknown = [
  {
    title: "Amazing1!",
    description: "This lib is truly awesome1!",
  },
  {
    title: "Amazing2!",
    description: "This lib is truly awesome2!",
  },
  {
    title: "Amazing3!",
    description: "This lib is truly awesome3!",
  },
];

describe("hasElementAtOfOf", () => {
  it("is truthy", () => {
    expect(hasElementAtOf(0, isObject)(posts)).toBeTruthy();
    expect(
      hasElementAtOf(
        2,
        hasElementAtOf(2, hasElementAtOf(0, isString))
      )(nestedArrays)
    ).toBeTruthy();
  });
  it("is falsy", () => {
    expect(hasElementAtOf(3, isString)(nestedArrays)).toBeFalsy();
    expect(hasElementAtOf(2, isString)(isNumber)).toBeFalsy();
  });
});
