import React, { Component } from 'react';
import './App.css';

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
      currentTemp = this.state.data.list[0].main.temp;
      currentCond = this.state.data.list[1].weather[0].main;
    }

    return (
      <div>
        <h1>My React Weather App</h1>
        <form onSubmit={this.fetchData}>
          <label>Please Enter Your Location For Current Weather:
            <input
              placeholder={"City, State, Zip, Country, etc."}
              type="text"
              value={this.state.location}
              onChange={this.changeLocation}
              />
          </label>
        </form>
        <p className="temp-wrapper">
          <span className="temp">Current Temperature: { currentTemp }</span>
          <span className="temp-symbol">°F</span>
        </p>
        <p className="cond-wrapper">
          <span className="cond">Current Conditions: { currentCond }</span>
        </p>
      </div>
    );
  }
}

export default App;
