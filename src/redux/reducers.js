import * as actions from "./actions";

const defaultState = {
  target: Math.floor(Math.random() * 100) + 1,
  feedback: "Make your guess. The history of your moves will appear below.",
  guesses: []
};

export default function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.constants.GENERATE_NUMBER:
      return Object.assign({}, state, {
        target: Math.floor(Math.random() * 100) + 1
      });
    case actions.constants.UPDATE_FEEDBACK:
      return Object.assign({}, state, {
        feedback: action.feedback
      });
    case actions.constants.ADD_GUESS:
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
      });
    default:
      return state;
  }
}
