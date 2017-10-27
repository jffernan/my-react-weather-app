import React, { Component } from 'react';

export default class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: []
    };
  };

  componentDidMount() {
    fetch('/api/v1/cities', {accept: 'application/json'})
    .then(response => response.json())
    .then(cities => {
      this.setState({
        id: cities.id,
        cityList: cities
      });
    });
  };

  clickHandler() {
    this.props.fetchDataClick();
  };

  render() {

    let cities = this.state.cityList;
    let searchString = this.props.searchString.trim().toLowerCase();

    if(searchString.length > 0){
      cities = cities.filter((city) => {
        return (
          city.name.toLowerCase().match( searchString )
        );
      });
    }

    return (
      <div>
        <ul>
          { cities.map((city) => {
            return (
              <div className = "cityList" key={cities.id}>
                <li>{city.name}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
};
