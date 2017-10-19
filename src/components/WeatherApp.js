import React from 'react';
import '../App.css';
import LocationForm from './LocationForm'
import OutputDisplay from './OutputDisplay'
import NavBar from './NavBar';
import Home from './Home';
import Map from './Map';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class WeatherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      data: {}
    };
  }

  fetchData = (handleSubmit) => {
    handleSubmit.preventDefault();

    const main = this;
    let query;
    query = encodeURIComponent(this.state.location);
    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + query + urlSuffix;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        main.setState({
          data: data
        });
      })
      .catch(error => alert("Error In Loading!"))
  };

  changeLocation = (event) => {
    this.setState({
      location: event.target.value
    });
  }

  render() {
    let currentLoc = 'Please Enter Above.';
    let currentTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';
    let googleLoc = "Location";

    if (this.state.data.list) {
      currentLoc = this.state.location;
      googleLoc = encodeURIComponent(this.state.location);
      currentTemp = Math.round(this.state.data.list[0].main.temp);
      currentCond = this.state.data.list[1].weather[0].description;
      //currentLat = this.state.data.city.coord.lat;
      //currentLon = this.state.data.city.coord.lon;
    }

    return (
      <Router>
        <div>
          <NavBar />
          <br/><br/>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={Map} gLocation = { googleLoc }/>
          <Route exact path="/about" component={About}/>
          <div className="weatherApp">
            <LocationForm
              fetchDataSubmit = { this.fetchData}
              changeLocationSubmit = { this.changeLocation }
              location = { this.state.location }
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
