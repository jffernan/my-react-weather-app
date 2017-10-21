var initialState = {
  location: '',
  data: {}
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return Object.assign({}, state, {
        location: action.location
      });
    case 'SET_DATA':
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
