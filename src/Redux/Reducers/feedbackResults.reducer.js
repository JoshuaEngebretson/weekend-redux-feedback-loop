const feedbackResults = (state = [], action) => {
  if (action.type === 'SET_FEEDBACK_RESULTS') {
      const feedbackResultsArray = action.payload;
      return feedbackResultsArray;
  }
  return state;
}

export default feedbackResults;