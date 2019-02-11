import * as constants from "./constants";

const defaultState = {
  target: Math.floor(Math.random() * 100) + 1,
  feedback: constants.INITIAL_FEEDBACK_TEXT,
  guesses: []
};

export default function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.GENERATE_NUMBER:
      return Object.assign({}, state, {
        target: Math.floor(Math.random() * 100) + 1
      });
    case constants.UPDATE_FEEDBACK:
      return Object.assign({}, state, {
        feedback: action.feedback
      });
    case constants.ADD_GUESS:
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
      });
    case constants.NEW_GAME:
      return Object.assign({}, state, {
        target: Math.floor(Math.random() * 100) + 1,
        feedback: constants.NEW_GAME_FEEDBACK_TEXT,
        guesses: []
      });
    default:
      return state;
  }
}
