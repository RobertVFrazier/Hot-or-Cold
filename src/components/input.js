import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.inputGuess = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.inputGuess.current.value);
    this.inputGuess.current.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.inputGuess} type="number" min="1" max="100" required />
        <button>Guess</button>
      </form>
    );
  }
}
