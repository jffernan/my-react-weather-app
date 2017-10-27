import React, { Component } from 'react';
import City from './City'

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
              <City cities={city} key={cities.id} />
            );
          })}
        </ul>
        <div className="submit">
          <Button
            id="submit"
            type="submit"
            bsStyle="primary" active>
            <span className = "button-text">New City
            </span>
          </Button>
        </div>
      </div>
    );
  }
};
