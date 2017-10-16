import React from 'react';
//var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Welcome to My React Weather App.  For more info, please visit links below: </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - Javascript framework.
                </li>
                <li>
                    <a href="https://openweathermap.org">OpenWeatherMap</a> - Used to search for weather data by city.
                </li>
                <li>
                    <a href="https://github.com/jffernan/my-react-weather-app">GitHub</a> - My React Weather App repo.
                </li>
            </ul>
        </div>
    )
};

export default About;
