const emptyFeedback = {
    feelings: '',
    understanding: '',
    supported: '',
    comments: '',
};

const currentFeedback = (state = emptyFeedback, action) => {
    switch (action.type) {
        case 'SET_FEELINGS_RATING':
            const feelingsInput = action.payload;
            return {...state, feelings: feelingsInput};

        case 'SET_UNDERSTANDING_RATING':
            const understandingInput = action.payload;
            return {...state, understanding: understandingInput};

        case 'SET_SUPPORTED_RATING':
            const supportedInput = action.payload;
            return {...state, supported: supportedInput};

        case 'SET_FEEDBACK_COMMENTS':
            const feedbackComments = action.payload;
            return {...state, comments: feedbackComments};

        case 'RESET_CURRENT_FEEDBACK':
            return emptyFeedback;

    default: return state;
    }
}

export default currentFeedback;