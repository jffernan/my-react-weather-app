import React, { Component } from 'react';
import '../App.css';
import LocationForm from './LocationForm'
import OutputDisplay from './OutputDisplay'
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
  constructor(props) {
    super(props)
    this.state = {
      cities: []
    };
  }

  fetchData = (handleSubmit) => {
    handleSubmit.preventDefault();

    let location = encodeURIComponent(this.props.location); //let query;
    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + location + urlSuffix;
    this.props.dispatch(fetchData(url));//call function thunked action
    //reset state to blank string & clear out input form after SUBMIT
    //this.setState({location: ''});
  };

  fetchCities = () => {
    let main = this;

    fetch('http://localhost:3001/api/v1/cities')
      .then(response => response.json())
      .then(cities => {
        main.setState({
           cities: cities
        });
      })
  };

  changeLocation = (event) => {
    this.props.dispatch(changeLocation(event.target.value));
  };

  render() {
    let currentLoc = 'Please Enter Above.';
    let currentTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';
    let googleLoc = "Location";
    let cities = this.state.cities;
    let searchString = this.props.location.trim().toLowerCase();

    if(searchString.length > 0){
// We are searching. Filter the results.
      cities = cities.filter(function(city){
        return city.name.toLowerCase().match( searchString );
      });
    }

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
            <div className = "cityList">
            <ul>
              { cities.map(function(city){
                return <li>{city.name}</li>
              }) }
            </ul>
            </div>
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
