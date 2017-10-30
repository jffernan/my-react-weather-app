import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';

export default class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      showButton: false
    };
  };
//CDM id: city.id, ?????
  componentDidMount() {
    fetch('/api/v1/cities', {accept: 'application/json'})
    .then(response => response.json())
    .then(cities => {
      this.setState({
        cityList: cities
      });
    });
  };
/*
  componentDidMount() {
    $.getJSON('/api/v1/cities.json', (response) =>
      { this.setState({ items: response })
    });
  };

  passCityName =  ( name ) => {
    this.setState( { loc: name } );
    this.props.fetchDataClick(this.state.loc)
  }
*/
  onClick() {
    this.setState({showButton: !this.state.showButton});
  }

  handleSubmit(city) {
    let newCityList = this.state.cityList.concat(city);
    this.setState({ cityList: newCityList })
  };

  render() {
//let self = this;
    let cities = this.state.cityList;
    let searchString = this.props.searchString.trim().toLowerCase();
//Shows all cities
    if(searchString.length > 0){
      cities = cities.filter((city) => {
        return (
          city.name.toLowerCase().match( searchString )
        );
      });
    }

    return (
      <div>
        <ul>
          { cities.map((city) => {
            return (
              <City
                cities={city}
                key={city.id}
                cityName = {city.name}
                //handleClick={self.passCityName}
              />
            )
          })}
        </ul>
        <div className="addNewCity" >
          <Button
            onClick={() => this.onClick()}
            id="submit"
            type="submit"
            style={{marginBottom: '5px'}}
            bsStyle="primary" active>
            <span className = "button-text">
              Add New City
            </span>
          </Button>
        </div>
        { this.state.showButton ?
          <CityForm
            handleSubmit={this.handleSubmit}
          />
          : null
        }
      </div>
    );
  }
};
