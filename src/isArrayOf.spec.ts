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
  it("is truthy", () => {
    expect(isArrayOf(isObject)(posts)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isArrayOf(isNumber)(arrayWithDifferentTypes)).toBeFalsy();
  });
});
