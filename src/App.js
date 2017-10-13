import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
// or
//import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    location: '',
    data: {}
  };

  fetchData = (event) => {
    event.preventDefault();

    let location = encodeURIComponent(this.state.location);

    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + location + urlSuffix;

    let self = this;

    fetch(url) //.then( function(response) { return response; } )
      .then(response => response.json())
      .then(data => {
        self.setState({
           data: data
        });
      })
  };

  changeLocation = (event) => {
    this.setState({
      location: event.target.value
    });
  };

  render() {
    let currentTemp = 'Not Loaded Yet';
    let currentCond = 'Not Loaded Yet';
    if (this.state.data.list) {
      currentTemp = Math.round(this.state.data.list[0].main.temp);
      currentCond = this.state.data.list[1].weather[0].main;
    }

    return (
      <div>
        <h1>My React Weather App</h1>
        <form onSubmit={this.fetchData}>
          <label>Enter '<b>Location</b>' Below To Fetch Current Weather:
            <input
              placeholder={"City, State, Zip, Country, etc.  "}
              type="text"
              autocomplete="on"
              value={this.state.location}
              onChange={this.changeLocation}
              />
          </label>
          <div className="submit">
            <Button
              id="submit"
              type="submit"
              bsStyle="primary">
              <span>
              Fetch Weather
              </span>
            </Button>
          </div>
        </form><br/>
        <p className="loc-wrapper">Current Location:
          <span className="loc">{ this.state.location  }</span>
        </p>
        <p className="temp-wrapper">Current Temperature:
          <span className="temp">{ currentTemp }</span>
          <span className="temp-symbol">°F</span>
        </p>
        <p className="cond-wrapper">Current Conditions:
          <span className="cond">{ currentCond }</span>
        </p>
      </div>
    );
  }
}

export default App;
