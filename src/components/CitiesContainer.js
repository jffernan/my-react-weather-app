import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';

export default class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      name: '',
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

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
//TypeError: Cannot read property 'state' of undefined
  addNewCity(handleSubmit) {
    handleSubmit.preventDefault();
    let name = this.state.name;
    let self = this;
    let data = {
      name: name
    }

    fetch('/api/v1/cities', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      const cities = this.state.cityList.concat(data);
      self.setState({
        cityList: cities
      })
    })
    .catch(error => console.log(error))
//reset name state to a blank string onSubmit to clear input form
    self.setState({
      name: ''
    });
  };

  render() {
    let cities = this.state.cityList;
    let searchString = this.props.searchString.trim().toLowerCase();

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
            name={this.state.name}
            handleNameChange={this.handleChange}
          />
        }
      </div>
    );
  }
};
