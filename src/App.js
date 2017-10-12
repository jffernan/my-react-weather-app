import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fetchData = (event) => { /* … */ };

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
