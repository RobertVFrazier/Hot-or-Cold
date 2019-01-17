import React from "react";
import { shallow } from "enzyme";

import Button from "./button";

describe("<Button />", () => {
  const button = shallow(<Button />);
  it("renders without crashing", () => {
    button;
  });
});
