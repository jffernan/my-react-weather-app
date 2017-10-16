import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './components/WeatherApp';
import registerServiceWorker from './registerServiceWorker';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <WeatherApp />,
  document.getElementById('root')
);

registerServiceWorker();
