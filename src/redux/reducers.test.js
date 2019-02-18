import gameReducer from "./reducers";
import { updateFeedback, addGuess } from "./actions";

describe("addGuess", () => {
  it("Should add a new guess", () => {
    let state = {
      guesses: []
    };
    state = gameReducer(state, addGuess(25));
    expect(state).toEqual({
      guesses: [25]
    });
  });
});

describe("updateFeedback", () => {
  it("Should update the feedback", () => {
    let state = {
      feedback: ""
    };
    state = gameReducer(
      state,
      updateFeedback("You WON! You did it in 1 move.")
    );
    expect(state).toEqual({
      feedback: "You WON! You did it in 1 move."
    });
  });
});
