import getContactHref from "./get-contact-href";

test("getContactHref", () => {
  expect(getContactHref("github", "#")).toBe("https://github.com/#");
});