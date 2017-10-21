export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
}

export function setData(data) {
  return {
    type: 'SET_DATA',
    data: data
  };
};

export function fetchData(url) {
  return function thunk(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', data }));
  }
}
