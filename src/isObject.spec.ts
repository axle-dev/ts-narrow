import { isObject } from "./isObject.js";

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

const user: unknown = {
  firstName: "Gabriel",
  lastName: "Oliveira",
  age: 10,
  picture: {
    url: "https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
  },
  posts,
};

describe("isObject", () => {
  it("is truthy", () => {
    expect(isObject(user)).toBeTruthy();
    expect(isObject([])).toBeTruthy();
    expect(isObject(null)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isObject(1)).toBeFalsy();
    expect(isObject("asd")).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
  });
});
