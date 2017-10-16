import React from 'react';
//var {Link} = require('react-router');
//presentational component in pure function
const About = () =>
  <div>
    <h1 className="text-center page-title">About</h1>
      <p>Welcome to My React Weather App. For more info, please visit the links below:</p>
      <div className="page-text">
        <a href="https://facebook.github.io/react">React
        </a> - JavaScript framework for building user interfaces.<br/>
        <a href="https://openweathermap.org">OpenWeatherMap API
        </a> - Fetch weather data with free API key.<br/>
        <a href="https://github.com/jffernan/my-react-weather-app">GitHub</a> - Download or clone My React Weather App repo to try.
      </div>
  </div>

export default About;
