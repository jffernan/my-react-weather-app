//Action is a plain JS object describing WHAT HAPPENED or changed after action.

export const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
}

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
  }
}

export const handleChange = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
}

export const handleClick = (showCityForm) => {
  return {
    type: 'CLICK_SHOW_CITY_FORM',
    showCityForm: !showCityForm
  };
}
//Action clicked showCityForm: true
