import React from "react";

import Button from "./button";
import InstructionsText from "./instructions-text";

export default class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructionsButtonClicked: false
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({
      instructionsButtonClicked: !this.state.instructionsButtonClicked
    });
  }

  render() {
    if (!this.state.instructionsButtonClicked) {
      return (
        <Button
          className="instr"
          handleButtonClick={this.click}
          buttonText="Instructions"
        />
      );
    } else return <InstructionsText handleButtonClick={this.click} />;
  }
}
