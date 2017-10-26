import React, { Component } from 'react';

class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  };

  componentDidMount() {
    fetch('/api/v1/cities', {
      accept: 'application/json',
    })
    .then(response => {
      response.json()
      console.log(response)
      this.setState({cities: response.data})
    })
    .catch(error => console.log(error))
  };

  render() {
    let cities = this.state.cities

    return (
      <div>
        <ul>
          { cities.map(function(city){
            return <li>{city.name}</li>
          }) }
        </ul>
      </div>
    );
  }
};

export default CitiesContainer;
