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
      .catch(error => window.alert("Error In Loading!"));
  };
};

export const nameHandleChange = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};

export const showCityFormOnClick = (boolean) => {
  return {
    type: 'CLICK_SHOW_CITY_FORM',
    showCityForm: !boolean
  };
};
//Above Action clicked showCityForm: true
