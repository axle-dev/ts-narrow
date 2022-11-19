import { ensure } from "./ensure.js";

describe("ensure", () => {
  it("is truthy", () => {
    expect(() => ensure(0)).not.toThrow();
    expect(() => ensure("")).not.toThrow();
    expect(() => ensure({})).not.toThrow();
    expect(() => ensure([])).not.toThrow();
    expect(() => ensure(false)).not.toThrow();
  });
  it("is falsy", () => {
    expect(() => ensure(null)).toThrow();
    expect(() => ensure(undefined)).toThrow();
  });
});
