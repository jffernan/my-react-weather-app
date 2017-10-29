import React, { Component } from 'react';
import City from './City'
import update from 'immutability-helper'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';

export default class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      editingCityId: null
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

  addNewCity = () => {
    fetch('/api/v1/cities', {city: {name: ''}})
    .then(cities => {
      update(this.state.cityList, {
        $splice: [[0, 0, cities]]
    })
      this.setState({
        cityList: cities,
        editingCityId: cities.id
      })
    })
    .catch(error => console.log(error))
  }

  updateCity = (city) => {
    const cityIndex = this.state.cityList.findIndex(x => x.id === city.id)
    const cities = update(this.state.cityList, {
      [cityIndex]: { $set: city }
    })
    this.setState({
      cityList: cities
    })
  }
/*
  passCityName =  ( name ) => {
    this.setState( { loc: name } );
    this.props.fetchDataClick(this.state.loc)
  }
*/
/*
  enableEditing = (id) => {
    this.setState({editingCityId: id})
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

//TypeError: cities.map is not a function define ABOVE????
    return (
      <div>
        <ul>
          { cities.map((city) => {
            if(this.state.editingCityId === city.id) {
              return (
                <CityForm
                  cities={city}
                  key={city.id}
                  updateCity={this.updateCity}
                />
              )
            }
            else {
              return (
                <City
                  cities={city}
                  key={city.id}
                  cityName = {city.name}
                  //handleClick={self.passCityName}
                />
              )
            }
          })}
        </ul>
        <div className="submitNewCity">
          <Button
            id="submit"
            type="submit"
            bsStyle="primary" active
            onClick={this.addNewCity} >
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
