import { posts } from "./testExamples";
import { hasElementAt } from "./hasElementAt";

describe("hasElementAt", () => {
  it("correctly verify existant index", () => {
    expect(hasElementAt(0)(posts)).toBeTruthy();
    expect(hasElementAt(1)(posts)).toBeTruthy();
    expect(hasElementAt(2)(posts)).toBeTruthy();
  });
  it("fails for undefined index", () => {
    expect(hasElementAt(3)(posts)).toBeFalsy();
  });
});
