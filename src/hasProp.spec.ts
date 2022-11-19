import { hasProp } from "./hasProp.js";

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

describe("hasProp", () => {
  it("is truthy", () => {
    expect(hasProp("firstName")(user)).toBeTruthy();
    expect(hasProp("lastName")(user)).toBeTruthy();
    expect(hasProp("age")(user)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(hasProp("wrongProperty")(user)).toBeFalsy();
  });
});
