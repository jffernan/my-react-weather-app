import React from 'react';
import '../App.css';
import LocationForm from './LocationForm'
import OutputDisplay from './OutputDisplay'
import NavBar from './NavBar';
import Home from './Home';
import Map  from './Map';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class WeatherApp extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      data: {}        //Obj contains weather date from API
    };
  }

  fetchData = (event) => {
    event.preventDefault();

    const main = this;
    let location = encodeURIComponent(this.state.location);
    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + location + urlSuffix;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        main.setState({
           data: data
        });
      })
  };

  changeLocation = (event) => {
    this.setState({
      location: event.target.value
    });
  }

  render() {
    let currentTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';

    if (this.state.data.list) {
      currentTemp = Math.round(this.state.data.list[0].main.temp);
      currentCond = this.state.data.list[1].weather[0].main;
    }

    return (
      <Router>
        <div>
          <NavBar />
          <br/><br/>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={Map}/>
          <Route exact path="/about" component={About}/>
          <div className="weatherApp">
            <LocationForm />
            <OutputDisplay
              locOutput = { this.state.location }
              tempOutput = {currentTemp}
              condOutput = {currentCond}
            />
          </div>
        </div>
      </Router>
    );
  }
}
