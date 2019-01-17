import React from "react";
import { shallow } from "enzyme";

import Input from "./input";

describe("<Input />", () => {
  const input = shallow(<Input />);
  it("renders without crashing", () => {
    input;
  });
});
