import React from "react";
import { shallow } from "enzyme";

import InstructionsText from "./instructions-text";

describe("<InstructionsText />", () => {
  it("renders without crashing", () => {
    shallow(<InstructionsText />);
  });

  it("renders the text correctly", () => {
    const wrapper = shallow(<InstructionsText />);
    expect(wrapper.type()).toEqual("h3");
    expect(
      wrapper.contains([
        "1. The game has picked a random number from 1 to 100."
      ])
    ).toEqual(true);
    expect(wrapper.contains(["2. You need to guess the number."])).toEqual(
      true
    );
    expect(
      wrapper.contains([
        "3. You will get feedback on how hot or cold your guess is."
      ])
    ).toEqual(true);
  });
});
