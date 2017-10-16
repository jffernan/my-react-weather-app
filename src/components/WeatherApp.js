import React from 'react';
import '../App.css';
import LocationForm from './LocationForm'
import OutputDisplay from './OutputDisplay'
import Home from 'Home';
//import Forecast from 'Forecast';
//import Map  from 'Map';
import About from 'About';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">My React Weather App
        </li>
        <li>
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >Home
          </NavLink>
        </li>
        <li>
          /*<NavLink
            to="/map"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >Map Location
          </NavLink>*/
        </li>
        <li>
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >About
          </NavLink>
        </li>
      </ul>
    </div>
  </div>;

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      country: undefined,
      temperature: undefined,
      condition: undefined,
      data: {}
    };

    this.changeLocation = this.changeLocation.bind(this);
  }

  static defaultProps = {
    location: 'Please Provide A Location.'
  };

  fetchData = (location) => {
    location.preventDefault();

    const main = this;
    let query = null;

    main.setState({
      infoStatus: 'loading'
    });

    if (!location || location === '') {
      query = this.props.location;
    } else {
      query = encodeURIComponent(this.state.location);//?query = location?
    }

    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + query + urlSuffix;

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

  changeLocation(location) {
    this.setState({
      location:location
    });
  }

  render() {
    let currentTemp = 'Not Loaded Yet';
    let currentCond = 'Not Loaded Yet';
    if (this.state.data.list) {
       currentTemp = Math.round(this.state.data.list[0].main.temp);
       currentCond = this.state.data.list[1].weather[0].main;
    }

    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
            //<Route exact="/map" component={Map} />
            <Route exact path="/about" component={About}/>

          <div className="weatherApp">
            <LocationForm
              location = {this.state.location}
            />
            <OutputDisplay
              location = {this.state.location}
              currentTemp = {currentTemp}
              currentCond = {currentCond}
            />
          </div>
        </div>
      </Router>
    );
  }
}
