import React from 'react';
import '../App.css';
import LocationForm from './LocationForm'
import OutputDisplay from './OutputDisplay'

export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: undefined,
      country: undefined,
      temperature: undefined,
      condition: undefined,
      data: {}
    };
  };

  static defaultProps = {
    location: 'Please Provide A Location.'
  };

  fetchData = (location) => {
    location.preventDefault();

    const main = this;
    let query = null;

    main.setState({
      infoStatus: 'loading'
    });

    if (!location || location === '') {
      query = this.props.location;
    } else {
      query = encodeURIComponent(this.state.location);//?query = location?
    }

    let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + query + urlSuffix;

    fetch(url)
      .then((response) => response)
      //.then((response) => {setTimeout(() => {main.setState({infoStatus: 'loaded'});}, 300); response.json();})
      .then(response => response.json())
      .then(data => {
        main.setState({
           data: data
           //country: data.sys.country
        });
      })
      .catch(() => {
        main.setState({
          infoStatus: 'error'
        });
      })
  };

  changeLocation = (event) => {
    this.setState({
      location: event.target.value
    });
  };

  render() {
    return (
      <div className="weatherApp">
        <LocationForm/>
        <OutputDisplay/>
      </div>
    );
  }
}
