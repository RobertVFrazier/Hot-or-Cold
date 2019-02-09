import * as constants from "./constants";

export const updateFeedback = feedback => {
  return {
    type: constants.UPDATE_FEEDBACK,
    feedback
  };
};

export const generateNumber = () => {
  return {
    type: constants.GENERATE_NUMBER
  };
};

export const addGuess = guess => {
  return {
    type: constants.ADD_GUESS,
    guess
  };
};
