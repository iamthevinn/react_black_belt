import { GET_TOP_HEADLINES, CHANGE_SELECTED_CATEGORY, GET_SOURCES_BY_CATEGORY } from './actions';

const initialState = {
    topHeadlines: [],
    selectedCategory: 'Business',
    sourcesByCategory: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_HEADLINES:
            return { ...state, topHeadlines: action.payload }
        case CHANGE_SELECTED_CATEGORY:
            return { ...state, selectedCategory: action.payload}
        case GET_SOURCES_BY_CATEGORY:
            return { ...state, sourcesByCategory: action.payload}

        default:
            return state;
    }
}

export default reducer;