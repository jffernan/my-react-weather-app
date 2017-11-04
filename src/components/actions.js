/*Action creators are functions that return action
Action is a plain JS object describing WHAT HAPPENED or changed after action
*/
export const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
};

export const loadingData = (data) => {
  return {
    type: 'LOADING_DATA',
    data: data
  };
};
//({ type: 'LOADING_DATA', data })) same as (loadingData(data))
export const fetchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch({ type: 'LOADING_DATA', data }))
      .catch(error => window.alert("Error Loading!"));
  };
};

export const nameHandleChange = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};
//Action clicked showCityForm: true
export const showCityFormOnClick = (boolean) => {
  return {
    type: 'CLICK_SHOW_CITY_FORM',
    showCityForm: !boolean
  };
};
/*
export const loadingCities = (cities) => {
  return {
    type: 'LOADING_CITIES',
    cityList: cities
  };
};

export function fetchCities() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CITIES_REQUEST' });
    return fetch('/api/v1/cities', {accept: 'application/json'})
      .then(response => response.json())
      .then(cities => dispatch({ type: 'LOADING_CITIES', cities }));
  };
}


export function fetchCities() {
  return (dispatch) => {
    fetch('/api/v1/cities', {accept: 'application/json'})
      .then((response) => response.json())
      .then((cities) => dispatch({ type: 'LOADING_CITIES', cities }))
      .catch((error) => window.alert("Error Loading!"));
  };
};
/*
({ type: 'LOADING_CITIES', cities })) same as (loadingCities(cities))
export const fetchCities = () => {
  return (dispatch) => {
    fetch('/api/v1/cities', {accept: 'application/json'})
      .then(response => response.json())
      .then(cities => dispatch({ type: 'LOADING_CITIES', cities }))
      .catch(error => window.alert("Error Loading!"));
  };
};
DUMMY'S GUIDE TO FETCH API
export function fetchCities() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CITIES' });
    return fetch('/api/v1/cities', {accept: 'application/json'})
      .then((response) => response.json())
      .then((cities) => dispatch(loadingCities(cities)))
      .catch((error) => window.alert("Error Loading!"));
  };
};

Called when cityListFetchCityList successful, then return cityList array
export const cityListSetCities = (cityList) => {
  return {
    type: 'SET_CITIES_TO_CITY_LIST',
    cityList
  };
};
//thunk below returns function
export const cityListFetchCities = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(cities => dispatch({ type: 'SET_CITIES_TO_CITY_LIST', cities }))
      .catch(error => window.alert("Error Loading!"));
  };
};

export const addNewCityToCityList = (name) => {
  return {
    type: 'ADD_NEW_CITY_TO_CITY_LIST',
    cityList: name
  };
};

export const fetchAddNewCity = (name) => {
  return (dispatch) => {
    fetch('/api/v1/cities', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(name)
    })
      .then(response => response.json())
      .then(name => dispatch({ type: 'ADD_NEW_CITY_TO_CITY_LIST', name }))
      .catch(error => window.alert("Error In Loading!"));
  };
};

*/
