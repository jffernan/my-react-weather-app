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
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';//import { (2) actions } from './actions';

class WeatherApp extends Component {

  callFetchData = (name) => {
    this.fetchData(null, name)
  }

  fetchData = (e, location) => {
    if (e) {
      e.preventDefault();
    }

    let newLocation = this.props.location || location
    let encodedLocation = encodeURIComponent(newLocation);
    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + encodedLocation + urlSuffix;
    this.props.actions.fetchData(url);
  };

  changeLocation = (event) => {
    this.props.actions.changeLocation(event.target.value);
  };

  render() {
    const { location, loadingStatus } = this.props;
    const isButtonEnabled =
      location.length > 0;

    let currentTemp, currentCond, googleLoc;

    if (this.props.data.list && loadingStatus === 'loaded') {
      currentTemp = Math.round(this.props.data.list[0].main.temp);
      currentCond = this.props.data.list[1].weather[0].description;
      googleLoc = this.props.location;
    } else if (loadingStatus === 'loading') {
      currentTemp = 'Loading Data...';
      currentCond = 'Please Wait.';
    } else if (loadingStatus === 'error') {
      currentTemp = 'Error Loading Data...';
      currentCond = 'Please Try again.';
    };
//currentLat = this.props.data.city.coord.lat;currentLon = this.props.data.city.coord.lon;
    return (
      <Router>
        <div>
          <NavBar />
          <br/><br/>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/map"
            render = {props =>
              <Map
                gLocation = { googleLoc } {...props}
              />
            }
          />
          <Route exact path = "/about" component = {About}/>
          <div className = "weatherApp">
            <LocationForm
              fetchDataSubmit = { this.fetchData}
              changeLocationSubmit = { this.changeLocation }
              location = { this.props.location }
              disabled={!isButtonEnabled}
            />
            <CitiesContainer
              fetchDataClick= {this.callFetchData}
              filterLocation = { this.props.location }
            />
            <OutputDisplay
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
  return {
    location: state.location,
    data: state.data,
    loadingStatus: state.loadingStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
