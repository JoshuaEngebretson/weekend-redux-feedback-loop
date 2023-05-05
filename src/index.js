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

const theStore = createStore(
    combineReducers({
        feedbackResults
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
