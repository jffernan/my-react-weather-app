import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fetchData = (event) => {
    event.preventDefault();
    console.log('fetch data!');
  };

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>Please Enter Your Location For:
            <input placeholder={"City, State, Zip, Country, etc."} type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
