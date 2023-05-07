import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// Reducers
import currentFeedback from '../Reducers/currentFeedback.reducer';
import feedbackResults from '../Reducers/feedbackResults.reducer';

const theStore = createStore(
  combineReducers({
      feedbackResults,
      currentFeedback
  }),
  applyMiddleware(
      logger
  )
)

export default theStore;