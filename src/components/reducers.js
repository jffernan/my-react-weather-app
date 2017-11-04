import { combineReducers } from 'redux';
//Separation Of Concerns each reducer concerns itself with piece of state
const mainReducer = combineReducers({
  location: locationReducer,
  data: dataReducer,
  name: nameReducer,
  showCityForm: showCityFormReducer,
  cityList: cityListReducer
});

function locationReducer(state = '', action) {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return action.location;

    default:
      return state;
  }
}

function dataReducer(state = {}, action) {
  switch (action.type) {
    case 'LOADING_DATA':
      return action.data;

    default:
      return state;
  }
}

function nameReducer(state = '', action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:
      return state;
  }
}

function showCityFormReducer(state = false, action) {
  switch (action.type) {
    case 'CLICK_SHOW_CITY_FORM':
      return action.showCityForm;

    default:
      return state;
  }
}

function cityListReducer(state = [], action) {
  switch (action.type) {
    case 'LOADING_CITIES':
      return action.cities;

    case 'ADD_NEW_CITY':
      return [
        ...state,
        {
          cityList: action.name
        }
      ];

    default:
      return state;
  }
}
//Add New City name to cityList array
export default mainReducer;
/*
case 'ADD_NEW_CITY':
  return Object.assign({}, state, {
    cityList: [ X
      ...state.cityList,
      {
        cityList: action.data
      }
    ]
    cityList: [ X
      ...state.cityList,
      action.data
    ]
  });
*/
