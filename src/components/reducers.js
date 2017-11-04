import { combineReducers } from 'redux';
//Separation Of Concerns each reducer concerns itself with piece of state
const mainReducer = combineReducers({
  location: locationReducer,
  data: dataReducer,
  name: nameReducer,
  showCityForm: showCityFormReducer
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
/*cityList: cityListReducer
function cityListReducer(state = [], action) {
  switch (action.type) {
    case 'LOADING_CITIES':
      return [
        ...state,
        {
          cityList: action.cityList
        }
      ];
    default:
      return state;
  }
};

function cityListReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CITIES':
      return {
        ...state,
        cityList: action.cityList
      }
    default:
      return state;
  }
};
function cityListReducer(state = [], action) {
  switch (action.type) {
    case 'SET_CITIES_TO_CITY_LIST':
      return action.cityList;
      OR?
      return {
        ...state,
        cityList: action.cityList
      };
    case 'ADD_NEW_CITY_TO_CITY_LIST':
      return Object.assign({}, state, {
        cityList: [
          ...state.cityList,
          {name: action.name
          }
        ]
      })
    default:
      return state;
  }
}
//Add New City name to cityList array
*/
export default mainReducer;
