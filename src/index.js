import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackResults = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK_RESULTS') {
        const feedbacResultsArray = action.payload;
        return feedbacResultsArray;
    }
    return state;
}

const currentFeedback = (state = {}, action) => {
    if (action.type === 'SET_FEELINGS_RATING') {
        const feelingsInput = action.payload;
        return {...state, feelings: feelingsInput};
    }
    else if (action.type === 'SET_UNDERSTANDING_RATING') {
        const understandingInput = action.payload;
        return {...state, understanding: understandingInput};
    }
    else if (action.type === 'SET_SUPPORTED_RATING') {
        const supportedInput = action.payload;
        return {...state, supported: supportedInput};
    }
    else if (action.type === 'SET_FEEDBACK_COMMENTS') {
        const feedbackComments = action.payload;
        return {...state, comments: feedbackComments}
    }
    return state;
}

const theStore = createStore(
    combineReducers({
        feedbackResults,
        currentFeedback
    }),
    applyMiddleware(
        logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={theStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
