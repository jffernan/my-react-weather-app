import React from 'react';
//var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <div className="page-text">
        <p><b>Welcome to My React Weather App.  For more info, please visit the links below:</b></p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - JavaScript library for building user interface.
          </li>
          <li>
            <a href="https://openweathermap.org">OpenWeatherMap</a> - Used to fetch weather data with free API key.
          </li>
          <li>
            <a href="https://github.com/jffernan/my-react-weather-app">GitHub</a> - Clone My React Weather App repo to try.
          </li>
        </ul>
      </div>
    </div>
  )
};

export default About;
