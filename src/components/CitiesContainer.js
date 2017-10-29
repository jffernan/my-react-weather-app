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
      editingCityId: null,
      data: {},
      location: ''
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
  enableEditing = (id) => {
    this.setState({editingCityId: id})
  }
*/
  fetchDataCity = (name) => {

    let query = encodeURIComponent({name});
    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + query + urlSuffix;
    let self = this;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        self.setState({
           data: data,
           location: name
        });
      })
  };

  render() {
    let self = this;
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
/*
    let currentLoc = 'Please Enter Above.';
    let currentTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';
    let googleLoc = "Location";

    if (this.state.data.list) {
      currentLoc = this.state.location;
      googleLoc = this.state.location;
      currentTemp = Math.round(this.state.data.list[0].main.temp);
      currentCond = this.state.data.list[1].weather[0].description;
    }
*/
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
                  name = {city.name}
                  fetchDataClick={self.fetchDataCity}
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
