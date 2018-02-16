import { GET_TOP_HEADLINES, CHANGE_SELECTED_CATEGORY } from './actions';

const initialState = {
    topHeadlines: [],
    selectedCategory: 'Business'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_HEADLINES:
            return { ...state, topHeadlines: action.payload }
        case CHANGE_SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.payload}

        default:
            return state;
    }
}

export default reducer;