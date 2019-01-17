import React from "react";
import { shallow } from "enzyme";

import Game from "./game";

describe("<Game />", () => {
  const game = shallow(<Game />);
  it("renders without crashing", () => {
    game;
  });
});
