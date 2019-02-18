import { updateFeedback, addGuess } from "./actions";
import * as constants from "./constants";

describe("updateFeedback", () => {
  it("Should return the action", () => {
    const feedback = "Room temperature";
    const action = updateFeedback(feedback);
    expect(action.type).toEqual(constants.UPDATE_FEEDBACK);
    expect(action.feedback).toEqual(feedback);
  });
});

describe("addGuess", () => {
  it("Should return the action", () => {
    const guess = 25;
    const action = addGuess(guess);
    expect(action.type).toEqual(constants.ADD_GUESS);
    expect(action.guess).toEqual(guess);
  });
});
