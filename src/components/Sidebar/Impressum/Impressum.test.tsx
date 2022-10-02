import React from "react";
import renderer from "react-test-renderer";

import { Impressum } from "@/components/Sidebar/Impressum";

describe("Impressum", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Impressum />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
