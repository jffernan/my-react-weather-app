/*Action creators are functions that return action
Action is a plain JS object describing WHAT HAPPENED or changed after action
*/
export const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
};
//({ type: 'LOADING_DATA', data })) same (loadingData(data)) same {data:data}
export const loadingData = (data) => {
  return {
    type: 'LOADING_DATA',
    data: data
  };
};
//Thunk: return function thunk(dispatch) {FETCH}; below Thunk written in ES6
export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(weatherIsLoading('loading'));
    fetch(url)
      .then((response) => {setTimeout(() => {dispatch(weatherIsLoading('loaded'));}, 1500);return response.json();})
      .then(data => dispatch({ type: 'LOADING_DATA', data }))
      .catch(error => dispatch(weatherIsLoading('error')));
  };
};
//dispatch{ type: 'WEATHER_IS_LOADING', isLoading } same as Line 20
export const nameHandleChange = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};
//Action clicked toggleCityForm: true
export const toggleCityFormOnClick = (boolean) => {
  return {
    type: 'CLICK_TOGGLE_CITY_FORM',
    toggleCityForm: !boolean
  };
};

export const loadingCities = (cities) => {
  return {
    type: 'LOADING_CITIES',
    cityList: cities
  };
};

export const fetchCities = () => {
  return (dispatch) => {
    fetch('/api/v1/cities', {accept: 'application/json'})
      .then(response => response.json())
      .then(cities => dispatch({ type: 'LOADING_CITIES', cities }))
      .catch(error => window.alert("Error Loading!"));
  };
};

export const addNewCity = (name) => {
  return {
    type: 'ADD_NEW_CITY',
    cityList: name
  };
};

export const fetchPostNewCity = (data) => {
  return (dispatch) => {
    fetch('/api/v1/cities', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_NEW_CITY', data }))
      .catch(error => window.alert("Error Loading!"));
  };
};

export const weatherIsLoading = (loadingStatus) => {
  return {
    type: 'WEATHER_IS_LOADING',
    loadingStatus: loadingStatus
  };
};
