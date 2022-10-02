import { ICONS } from "@/constants";
import { getIcon } from "@/utils";

test("getIcon", () => {
  expect(getIcon("github")).toBe(ICONS.github);
});
