import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    location: ''
  };

  fetchData = (event) => {
    event.preventDefault();
    var location = encodeURIComponent(this.state.location);

    var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    var url = urlPrefix + location + urlSuffix;

    

  };

  changeLocation = (event) => {
    this.setState({
      location: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Weather</h1>
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
      </div>
    );
  }
}

export default App;
