import React from 'react';
import '../App.css';
import LocationForm from './LocationForm'
import OutputDisplay from './OutputDisplay'
import NavBar from './NavBar';
import Home from './Home';
import Map  from './Map';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Forecast from 'Forecast';

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      /*country: undefined,
      temperature: undefined,
      condition: undefined,*/
      data: {}
    };
  }

  fetchData = (event) => {
    event.preventDefault();

    const main = this;
    /*
    let query;

    main.setState({
      infoStatus: 'loading'
    });

    if (!location || location === '') {
      query = this.props.location;
    } else {
      query = encodeURIComponent(location);//?query = location?
    }
    */
    let location = encodeURIComponent(this.state.location);
    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + location + urlSuffix;

    fetch(url)
      .then((response) => response)
      //.then((response) => {setTimeout(() => {main.setState({infoStatus: 'loaded'});}, 300); response.json();})
      .then(response => response.json())
      .then(data => {
        main.setState({
           data: data
           //country: data.sys.country
        });
      })
      .catch(() => {
        main.setState({
          infoStatus: 'error'
        });
      })
  };

  /*changeLocation = (event) => {
    this.setState({
      location: event.target.value
    });
  };*/

  changeLocation(event) {
    this.setState({
      location: event.target.value
    });
  }

  render() {
    let currentTemp;
    let currentCond;
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
            <LocationForm
              onSubmit = {this.fetchData}
            />
            <OutputDisplay
              locOutput = {this.state.location}
              tempOutput = {currentTemp}
              condOutput = {currentCond}
            />
          </div>
        </div>
      </Router>
    );
  }
}
