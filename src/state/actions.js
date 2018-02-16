import axios from "axios"

export const GET_TOP_HEADLINES = "GET_TOP_HEADLINES";
export const CHANGE_SELECTED_CATEGORY = "CHANGE_SELECTED_CATEGORY";
export const GET_SOURCES_BY_CATEGORY = "GET_SOURCES_BY_CATEGORY"
export const GET_SUBSCRIBED_SOURCES = "GET_SUBSCRIBED_SOURCES"
export const GET_SUBSCRIBED_HEADLINES = "GET_SUBSCRIBED_HEADLINES"

export function loadTopHeadlines() {
  return (dispatch, getState, api) => {
    const promise = axios.get(api + 'top-headlines?country=us&apiKey=9d5b1ad7e74e4d0bb6f3b13741235e56');

    promise.then(({ data: headlines }) => {
      dispatch({ type: GET_TOP_HEADLINES, payload: headlines.articles })
    }, () => { })
  }
}

export function loadCategory(categoryName) {

  return (dispatch, getState, api) => {
    const promise = axios.get(api + 'sources?category=' + categoryName + '&language=en&apiKey=9d5b1ad7e74e4d0bb6f3b13741235e56');

    promise.then(({ data: sourceData }) => {
      dispatch({ type: GET_SOURCES_BY_CATEGORY, payload: sourceData.sources })
    }, () => { })
  }
}

export function loadSubscribedSourcesToState() {
  return (dispatch, getState, api) => {
    const promise = axios.get('http://5a86f1d1492dc500121b88a8.mockapi.io/subscribed_sources');
    promise.then(({ data: subscribedSources }) => {
      dispatch({ type: GET_SUBSCRIBED_SOURCES, payload: subscribedSources })
      dispatch(loadSubscribedHeadlinesToState(subscribedSources.map((subscribedSource) => subscribedSource.sourceId)))
    }, () => { })
  }
}

export function addSourceToSubscriptions(sourceObj) {
  return (dispatch, getState, api) => {
    const promise = axios.post('http://5a86f1d1492dc500121b88a8.mockapi.io/subscribed_sources', sourceObj);

    promise.then(() => {
      dispatch(loadSubscribedSourcesToState())
    }, () => { })
  }
}

export function loadSubscribedHeadlinesToState(subscribedSourcesArray) {

  return (dispatch, getState, api) => {
    const promise = axios.get('http://newsapi.org/v2/everything?sources=' + subscribedSourcesArray.join() + '&language=en&pageSize=100&apiKey=9d5b1ad7e74e4d0bb6f3b13741235e56');

    promise.then(({data: headlines}) => {
      dispatch({type: GET_SUBSCRIBED_HEADLINES, payload: headlines.articles})
    }, () => { })
  }
}

/*
export function loadBlocDataToState(id) {
  return (dispatch, getState, api) => {
    const promise = axios.get(api + "regionalbloc/" + id);

    promise.then(({ data: blocData }) => {
      dispatch({ type: GET_BLOC_DATA, payload: blocData })
    }, () => { })
  }
}

export function loadTrackedCountriesToState() {
  return (dispatch, getState, api) => {
    const promise = axios.get('http://5a8499bd3015220012486c1d.mockapi.io/countries');

    promise.then(({ data: trackedCountries }) => {
      dispatch({ type: UPDATE_TRACKED_COUNTRIES, payload: trackedCountries })
    }, () => { })
  }
}

export function addCountryToTrack(countryObj) {
  return (dispatch, getState, api) => {
    const promise = axios.post('http://5a8499bd3015220012486c1d.mockapi.io/countries', countryObj);

    promise.then(({ data: trackedCountries }) => {
      dispatch(loadTrackedCountriesToState())
    }, () => { })
  }
}

export function untrackCountry(countryId) {
  return (dispatch, getState, api) => {
    const promise = axios.delete('http://5a8499bd3015220012486c1d.mockapi.io/countries/' + countryId);

    promise.then(({ data: trackedCountries }) => {
      dispatch(loadTrackedCountriesToState())
    }, () => { })
  }
}
*/