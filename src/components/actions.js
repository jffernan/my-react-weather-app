/*Action creators are functions that return action
Action is a plain JS object describing WHAT HAPPENED or changed after action
*/
export const locationChangeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
};

export const setData = (data) => {
  return {
    type: 'SET_DATA',
    data: data
  };
};

export const dataFetchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', data }))
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
/*Called when cityListFetchCityList successful, then return cityList array
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
