import React, { Component } from 'react';
import City from './City'
//import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';

export default class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: []
    };
  };
//CDM id: city.id, ?????
  componentDidMount() {
    fetch('/api/v1/cities', {accept: 'application/json'})
    .then(response => response.json())
    .then(cities => {
      this.setState({
        cityList: cities
      });
    });
  };

//
/*
  passCityName =  ( name ) => {
    this.setState( { loc: name } );
    this.props.fetchDataClick(this.state.loc)
  }
*/

  render() {
//let self = this;
    let cities = this.state.cityList;
    let searchString = this.props.searchString.trim().toLowerCase();
//Shows all cities
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
              <City
                cities={city}
                key={city.id}
                cityName = {city.name}
                //handleClick={self.passCityName}
              />
            )
          })}
        </ul>
        <div className="submitNewCity">
          <Button
            id="submit"
            type="submit"
            bsStyle="primary" active
            //onClick={this.displayCityForm}
            >
            <span className = "button-text">
              Add New City
            </span>
          </Button>
        </div>
        <br/>
      </div>
    );
  }
};
