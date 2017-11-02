/*Action creators are functions that return action
Action is a plain JS object describing WHAT HAPPENED or changed after action */
export const changeLocation = (location) => {
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

export const fetchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', data }))
      .catch(error => window.alert("Error In Loading!"));
  };
};

export const handleChange = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};

export const handleClick = (showCityForm) => {
  return {
    type: 'CLICK_SHOW_CITY_FORM',
    showCityForm: !showCityForm
  };
};
//Above Action clicked showCityForm: true
export const setCitiesToCityList = (cityList) => {
  return {
    type: 'SET_CITIES_TO_CITY_LIST',
    cityList
  };
};
//Above called when fetchCityList successful
export const addNewCityToCityList = (name) => {
  return {
    type: 'ADD_NEW_CITY_TO_CITY_LIST',
    cityList: name
  };
};
//thunk below returns function
export const fetchCityList = () => {
  return (dispatch) => {
    fetch('/api/v1/cities', {accept: 'application/json'})
      .then(response => response.json())
      .then(cities => dispatch({ type: 'SET_CITIES_TO_CITY_LIST', cities }))
      .catch(error => window.alert("Error In Loading!"));
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
