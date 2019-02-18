import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import * as actions from "../redux/actions";
import Instructions from "./instructions";
import Input from "./input";
import "./game.css";

function Reset(props) {
  function onButtonClicked() {
    props.handleClick();
  }
  return (
    <button className="btn-reset" onClick={onButtonClicked}>
      New Game
    </button>
  );
}

export class Game extends React.Component {
  handleFormSubmit = value => {
    let guesses = this.props.guesses;
    let target = this.props.target;
    let priorGuesses = [];
    for (let i = 0; i < guesses.length; i++) {
      priorGuesses.push(guesses[i].number);
    }
    if (priorGuesses.indexOf(parseInt(value)) === -1) {
      let distance = Math.abs(target - value);
      let feedback = "";
      if (distance >= 96) {
        feedback = "Oxygen freezes";
      } else if (distance >= 91 && distance <= 95) {
        feedback = "Oxygen liquifies";
      } else if (distance >= 86 && distance <= 90) {
        feedback = "Carbon dioxide freezes";
      } else if (distance >= 81 && distance <= 85) {
        feedback = "Hands and face numb";
      } else if (distance >= 76 && distance <= 80) {
        feedback = "Water freezes";
      } else if (distance >= 71 && distance <= 75) {
        feedback = "Winter wind";
      } else if (distance >= 66 && distance <= 70) {
        feedback = "Autumn breeze";
      } else if (distance >= 61 && distance <= 65) {
        feedback = "Rather chilly";
      } else if (distance >= 56 && distance <= 60) {
        feedback = "Slightly cool";
      } else if (distance >= 51 && distance <= 55) {
        feedback = "Room temperature";
      } else if (distance >= 46 && distance <= 50) {
        feedback = "Slightly warm";
      } else if (distance >= 41 && distance <= 45) {
        feedback = "Summer breeze";
      } else if (distance >= 36 && distance <= 40) {
        feedback = "Rather heated";
      } else if (distance >= 31 && distance <= 35) {
        feedback = "Desert wind";
      } else if (distance >= 26 && distance <= 30) {
        feedback = "Water boils";
      } else if (distance >= 21 && distance <= 25) {
        feedback = "Paper catches fire";
      } else if (distance >= 16 && distance <= 20) {
        feedback = "Lead melts";
      } else if (distance >= 11 && distance <= 15) {
        feedback = "Lava boils";
      } else if (distance >= 6 && distance <= 10) {
        feedback = "Iron boils";
      } else if (distance === 5) {
        feedback = "Center of the Earth";
      } else if (distance === 4) {
        feedback = "Surface of the Sun";
      } else if (distance === 3) {
        feedback = "Center of the Sun";
      } else if (distance === 2) {
        feedback = "Nova heat!";
      } else if (distance === 1) {
        feedback = "Supernova explosion!";
      } else if (distance === 0) {
        let guessCount = guesses.length + 1;
        let plural = guessCount > 1 ? "s" : "";
        feedback =
          "You WON! You did it in " + guessCount + " move" + plural + ".";
      }

      this.props.dispatch(
        actions.addGuess({
          id: Math.random(),
          number: parseInt(value, 10),
          distance: distance
        })
      );
      this.props.dispatch(actions.updateFeedback(feedback));
    } else {
      this.setState({ feedback: `You already guessed ${value}!` });
      setTimeout(
        () =>
          this.setState({
            feedback: "Enter a new guess."
          }),
        3000
      );
    }
  };

  handleClick = () => {
    this.props.dispatch(actions.newGame());
  };

  render() {
    const guessHistory = this.props.guesses.map(guess => {
      const className = classNames("guess-box", {
        "guess-box--cold-9": guess.distance >= 96,
        "guess-box--cold-8": guess.distance >= 91 && guess.distance <= 95,
        "guess-box--cold-7": guess.distance >= 86 && guess.distance <= 90,
        "guess-box--cold-6": guess.distance >= 81 && guess.distance <= 85,
        "guess-box--cold-5": guess.distance >= 76 && guess.distance <= 80,
        "guess-box--cold-4": guess.distance >= 71 && guess.distance <= 75,
        "guess-box--cold-3": guess.distance >= 66 && guess.distance <= 70,
        "guess-box--cold-2": guess.distance >= 61 && guess.distance <= 65,
        "guess-box--cold-1": guess.distance >= 56 && guess.distance <= 60,
        "guess-box--neutral": guess.distance >= 51 && guess.distance <= 55,
        "guess-box--hot-1": guess.distance >= 46 && guess.distance <= 50,
        "guess-box--hot-2": guess.distance >= 41 && guess.distance <= 45,
        "guess-box--hot-3": guess.distance >= 36 && guess.distance <= 40,
        "guess-box--hot-4": guess.distance >= 31 && guess.distance <= 35,
        "guess-box--hot-5": guess.distance >= 26 && guess.distance <= 30,
        "guess-box--hot-6": guess.distance >= 21 && guess.distance <= 25,
        "guess-box--hot-7": guess.distance >= 16 && guess.distance <= 20,
        "guess-box--hot-8": guess.distance >= 11 && guess.distance <= 15,
        "guess-box--hot-9": guess.distance >= 6 && guess.distance <= 10,
        "guess-box--superhot-5": guess.distance === 5,
        "guess-box--superhot-4": guess.distance === 4,
        "guess-box--superhot-3": guess.distance === 3,
        "guess-box--superhot-2": guess.distance === 2,
        "guess-box--superhot-1": guess.distance === 1,
        "guess-box--superhot-0": guess.distance === 0
      });

      return (
        <div className={className} key={guess.id}>
          {guess.number}
        </div>
      );
    });

    return (
      <>
        <h1>Hot or Cold</h1>
        <Instructions />
        <Input handleFormSubmit={this.handleFormSubmit} />
        <h3>{this.props.feedback}</h3>
        <div className="history">{guessHistory}</div>
        <Reset handleClick={this.handleClick} />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    target: state.target,
    guesses: state.guesses,
    feedback: state.feedback
  };
};

export default connect(mapStateToProps)(Game);
