import actions from '../actions';

let initialState = {
    feedback: false
}; //we would need this to preview the blog, before the user adds categories

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.OPEN_FEEDBACK:
            return { ...state, feedback: true };

        case actions.CLOSE_FEEDBACK:
            return { ...state, feedback: false };
        default:
            return initialState;
    }
};
