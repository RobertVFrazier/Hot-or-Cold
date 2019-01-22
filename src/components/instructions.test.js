import React from "react";
import { mount } from "enzyme";

import Instructions from "./instructions";

describe("<Instructions />", () => {
  const instruct = mount(<Instructions />);
  it("renders without crashing", () => {
    instruct;
  });

  it("shows instructions and shows `Understood` button on first click", () => {
    instruct.find(".btn-instr").simulate("click");
    expect(instruct.state().instructionsButtonClicked).toEqual(true);
    expect(instruct.type()).toEqual(Instructions);
  });

  it("hides instructions and shows `Instructions` button on second click", () => {
    instruct.find('[buttonText="Understood"]').simulate("click");
    expect(instruct.state().instructionsButtonClicked).toEqual(false);
  });
});
