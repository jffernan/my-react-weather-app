import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';

export default class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      showCityForm: false
    };
  };

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
  passCityName =  ( name ) => {
    this.setState( { loc: name } );
    this.props.fetchDataClick(this.state.loc)
  }
*/
  handleClick() {
    this.setState({showCityForm: !this.state.showCityForm});
  }

  addNewCity(handleSubmit) {
    handleSubmit.preventDefault();

    fetch('/api/v1/cities', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({city: {name: ''}})
    })
    .then(response => {
      const newCityList = this.state.cityList.concat(response);
      this.setState({
        cityList: newCityList
      })
    })
    .catch(error => console.log(error))
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
                cityName = {city.name}
                //handleClick={self.passCityName}
              />
            )
          })}
        </ul>
        <div className="addNewCity" >
          <Button
            onClick={() => this.handleClick()}
            type="submit"
            style={{marginBottom: '5px'}}
            bsStyle="primary" active>
            <span className = "button-text">
              Add New City
            </span>
          </Button>
        </div>
        { this.state.showCityForm &&
          <CityForm
            addNewCitySubmit={this.addNewCity}
            //city = {city}
          />
        }
      </div>
    );
  }
};
