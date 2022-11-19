import { hasElementAt } from "./hasElementAt.js";

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

describe("hasElementAt", () => {
  it("is truthy", () => {
    expect(hasElementAt(0)(posts)).toBeTruthy();
    expect(hasElementAt(1)(posts)).toBeTruthy();
    expect(hasElementAt(2)(posts)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(hasElementAt(3)(posts)).toBeFalsy();
  });
});
