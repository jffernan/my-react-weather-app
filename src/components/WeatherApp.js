import React, { Component } from 'react';
import '../App.css';
import LocationForm from './LocationForm';
import CitiesContainer from './CitiesContainer';
import OutputDisplay from './OutputDisplay';
import NavBar from './NavBar';
import Home from './Home';
import Map from './Map';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  changeLocation,
  fetchData
 } from './actions';

class WeatherApp extends Component {
  fetchData = (handleSubmit) => {
    handleSubmit.preventDefault();

    let location = encodeURIComponent(this.props.location); //let query;
    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + location + urlSuffix;
    this.props.dispatch(fetchData(url));//call function thunked action
  };

/*
  fetchCities = () => {
    let main = this;

    fetch('/api/v1/cities') .json?
      .then(response => response.json())
      .then(cities => {
        main.setState({
           cities: cities
        });
      })
  };
  */

  changeLocation = (event) => {
    this.props.dispatch(changeLocation(event.target.value));
  };

  render() {
    let currentLoc = 'Please Enter Above.';
    let currentTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';
    let googleLoc = "Location";

    if (this.props.data.list) {
      currentLoc = this.props.location;
      googleLoc = this.props.location;
      currentTemp = Math.round(this.props.data.list[0].main.temp);
      currentCond = this.props.data.list[1].weather[0].description;
      //currentLat = this.state.data.city.coord.lat;
      //currentLon = this.state.data.city.coord.lon;
    }

    return (
      <Router>
        <div>
          <NavBar />
          <br/><br/>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/map"
            render = {props =>
              <Map
                gLocation = { googleLoc } {...props}
              />
            }
          />
          <Route exact path = "/about" component = {About}/>
          <br/>
          <div className = "weatherApp">
            <LocationForm
              fetchDataSubmit = { this.fetchData}
              changeLocationSubmit = { this.changeLocation }
              location = { this.props.location }
            />
            <CitiesContainer
              searchString = { this.props.location }
              />
            <OutputDisplay
              locOutput = { currentLoc }
              tempOutput = { currentTemp }
              condOutput = { currentCond }
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}
//return entire state instead of location: state.location
export default connect(mapStateToProps)(WeatherApp);
