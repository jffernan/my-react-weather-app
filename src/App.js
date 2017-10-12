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

    fetch(url)
      .then( function(response) { return response; } )
      .then( function(response) { return response.json(); } )
      .then( function(data) {
        self.setState({
         data: data
        });
      })
      /*
      .then(response => response.json())
      .then(data => self.setState({ data: data.body
      })); //JSON.parse(data.body)*/
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
          <span className="temp"><b>Current Temperature: </b>{ currentTemp }</span>
          <span className="temp-symbol">°F</span>
        </p>
        <p className="temp-wrapper">
          <span className="temp"><b>Current Conditions: </b>{ currentTemp }</span>
          <span className="temp-symbol"></span>
        </p>
      </div>
    );
  }
}

export default App;
