const Intern = require("../lib/Intern");

test("Able to use the constructor to set a school", () => {
  const testValue = "Harvard";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Able to return intern with getRole()", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "Harvard");
  expect(e.getRole()).toBe(testValue);
});

test("Able to use getSchool() to get a school", () => {
  const testValue = "Harvard";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
