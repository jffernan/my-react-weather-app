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
      display: ''
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

  addNewCity = () => {
    fetch('/api/v1/cities', {city: {name: ''}})
    .then(response => {
      const cities = update(this.state.cityList, {
      $splice: [[0, 0, response.data]]
    })
      this.setState({
        cityList: cities,
        editingCityId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  updateCity = (city) => {
    const cityIndex = this.state.cities.findIndex(x => x.id === cities.id)
    const cities = update(this.state.cityList, {
      [cityIndex]: { $set: city }
    })
    this.setState({
      cityList: cities
    })
  }

  enableEditing = (id) => {
    this.setState({editingCityId: id})
  }

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
           display: name
        });
      })
  };

  render() {
    let self = this;
    let cities = this.state.cityList;
    let searchString = this.props.searchString.trim().toLowerCase();
//Displays all cities
    if(searchString.length > 0){
      cities = cities.filter((city) => {
        return (
          city.name.toLowerCase().match( searchString )
        );
      });
    }

    let currentLoc = 'Please Enter Above.';
    let currentTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';
    let googleLoc = "Location";

    if (this.state.data.list) {
      currentLoc = this.state.display;
      googleLoc = this.state.display;
      currentTemp = Math.round(this.state.data.list[0].main.temp);
      currentCond = this.state.data.list[1].weather[0].description;
    }

    return (
      <div>
        <ul>
          { cities.map((city) => {
            if(this.state.editingCityId === cities.id) {
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
                  key={cities.id}
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
