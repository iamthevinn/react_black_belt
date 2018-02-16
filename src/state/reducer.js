import { GET_TOP_HEADLINES, CHANGE_SELECTED_CATEGORY, GET_SOURCES_BY_CATEGORY, GET_SUBSCRIBED_SOURCES, GET_SUBSCRIBED_HEADLINES } from './actions';

const initialState = {
  topHeadlines: [],
  selectedCategory: 'Business',
  sourcesByCategory: [],
  subscribedSources: [],
  subscribedHeadlines: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_HEADLINES:
      return { ...state, topHeadlines: action.payload }
    case CHANGE_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload }
    case GET_SOURCES_BY_CATEGORY:
      return { ...state, sourcesByCategory: action.payload }
    case GET_SUBSCRIBED_SOURCES:
      return { ...state, subscribedSources: action.payload }
    case GET_SUBSCRIBED_HEADLINES:
      return { ...state, subscribedHeadlines: action.payload }

    default:
      return state;
  }
}

export default reducer;