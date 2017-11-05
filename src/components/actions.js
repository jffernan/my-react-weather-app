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

export const loadingCities = (cities) => {
  return {
    type: 'LOADING_CITIES',
    cityList: cities
  };
};

export const fetchCities = () => {
  return (dispatch) => {
    fetch('/api/v1/cities', {accept: 'application/json'})
      .then((response) => response.json())
      .then((cities) => dispatch({ type: 'LOADING_CITIES', cities }))
      .catch((error) => window.alert("Error Loading!"));
  };
};

export const addNewCity = (name) => {
  return {
    type: 'ADD_NEW_CITY',
    cityList:name
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
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'ADD_NEW_CITY', data }))
      .catch(error => window.alert("Error Loading!"));
  };
};
