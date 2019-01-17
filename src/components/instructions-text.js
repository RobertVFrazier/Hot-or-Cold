import React from "react";

import Button from "./button";

export default function InstructionsText(props) {
  return (
    <h3>
      1. The game has picked a random number from 1 to 100.
      <br />
      2. You need to guess the number.
      <br />
      3. You will get feedback on how hot or cold your guess is.
      <br />
      <br />
      <Button
        handleButtonClick={props.handleButtonClick}
        buttonText="Understood"
      />
    </h3>
  );
}
