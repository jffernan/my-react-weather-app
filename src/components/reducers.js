import { combineReducers } from 'redux';
//Separation Of Concerns each reducer concerns itself with piece of state
const mainReducer = combineReducers({
  location: locationReducer,
  data: dataReducer
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
    case 'SET_DATA':
      return action.data;

    default:
      return state;
  }
}

export default mainReducer;
