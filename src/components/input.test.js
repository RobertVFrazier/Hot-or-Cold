import React from "react";
import { shallow, mount } from "enzyme";

import Input from "./input";
import Game from "./game";

describe("<Input />", () => {
  const input = shallow(<Input />);
  it("renders without crashing", () => {
    input;
  });

  it("submits a guess entered in the input field when `Guess` button is clicked, or Enter key is pressed", () => {
    const callback = jest.fn();
    const wrapper = mount(<Input handleFormSubmit={callback} />);
    const value = "25";
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value);
  });
});
