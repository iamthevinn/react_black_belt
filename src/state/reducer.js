import { GET_TOP_HEADLINES } from './actions';

const initialState = {
    topHeadlines: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_HEADLINES:
            return { ...state, topHeadlines: action.payload }
        default:
            return state;
    }
}

export default reducer;