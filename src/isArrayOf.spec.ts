import { isArrayOf } from "./isArrayOf.js";
import { isNumber } from "./isNumber.js";
import { isObject } from "./isObject.js";

const arrayWithDifferentTypes: unknown = [1, 2, "asd", 3, 4];
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

describe("isArray", () => {
  it("correctly infers that all elements of an array has correct type", () => {
    expect(isArrayOf(isObject)(posts)).toBeTruthy();
  });
  it("fails if any of elements didn't match", () => {
    expect(isArrayOf(isNumber)(arrayWithDifferentTypes)).toBeFalsy();
  });
});
