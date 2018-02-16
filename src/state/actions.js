import axios from "axios"

export const GET_TOP_HEADLINES = "GET_TOP_HEADLINES";
export const CHANGE_SELECTED_CATEGORY = "CHANGE_SELECTED_CATEGORY";


export function loadTopHeadlines() {
  return (dispatch, getState, api) => {
    const promise = axios.get(api + 'top-headlines?country=us&apiKey=9d5b1ad7e74e4d0bb6f3b13741235e56');

    promise.then(({ data: headlines }) => {
      dispatch({ type: GET_TOP_HEADLINES, payload: headlines.articles })
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