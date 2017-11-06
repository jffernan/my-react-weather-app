import { combineReducers } from 'redux';
//Separation Of Concerns each reducer concerns itself with piece of state
const locationReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return action.location;

    default:
      return state;
  }
};

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOADING_DATA':
      return action.data;

    default:
      return state;
  }
};

const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:
      return state;
  }
};

const showCityFormReducer = (state = false, action) => {
  switch (action.type) {
    case 'CLICK_SHOW_CITY_FORM':
      return action.showCityForm;

    default:
      return state;
  }
};
//return {cityList: [...state, action.data]};
const cityListReducer = (state = {
  cityList: [],
}, action) => {
  switch (action.type) {
    case 'LOADING_CITIES':
      return action.cities;

    case 'ADD_NEW_CITY':
      return [
        ...state, action.data
      ];

    default:
      return state;
  }
};
//Instead spread operator, return {cityList: state.cityList.concat(action.data), name: ''};
const mainReducer = combineReducers({
  location: locationReducer,
  data: dataReducer,
  name: nameReducer,
  showCityForm: showCityFormReducer,
  cityList: cityListReducer
});

export default mainReducer;
