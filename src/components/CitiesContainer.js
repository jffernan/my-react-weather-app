import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux'; //connect component to Redux store
//import { bindActionCreators } from 'redux';
import { nameHandleChange,
         showCityFormOnClick
       } from './actions';
import * as actions from './actions.js';
export class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      name: ''
    };
  };
/*call function thunked action (fetchCityList) in Line 100
  componentDidMount() {

    this.props.dispatch(cityListFetchCities('/api/v1/cities', {accept: 'application/json'}));
  }
*/
//call function thunked action (fetchCityList) in Line 100
/*import fetchCities
  componentDidMount() {
    this.props.dispatch(fetchCities());
  }
*/
  fetchCitiesData(url) {
    fetch(url)
      .then(response => response.json())
      .then(cities => {
        this.setState({
          cityList: cities
        })
      })
      .catch(error => window.alert("Error In Loading!"));
  }
  //call function thunked action (fetchCityList) in Line 100
  componentDidMount() {
    this.fetchCitiesData('/api/v1/cities', {accept: 'application/json'});
  }

  passCityName =  ( name ) => {
    this.props.fetchDataClick(name)
  }

  handleClick() {
    this.props.dispatch(showCityFormOnClick(this.props.showCityForm));
  }

  handleChange = (event) => {
    this.props.dispatch(nameHandleChange(event.target.value));
  }

  addNewCity = (handleSubmit) => {
    handleSubmit.preventDefault();
    let name = this.props.name;
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
    .catch(error => window.alert("Error Loading!"))
//reset name st@te to a blank string onSubmit to clear input form
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

    const { name } = this.props;
    const isEnabled =
      name.length > 0;

    return (
      <div>
        <ul>
          { cities.map((city) => {
            return (
              <City
                cityName = {city.name}
                onClick={this.passCityName}
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
        { this.props.showCityForm &&
          <CityForm
            addNewCitySubmit={this.addNewCity}
            name={this.props.name}
            handleNameChange={this.handleChange}
            disabled={!isEnabled}
          />
        }
      </div>
    );
  }
};
//map Redux st@te & dispatkhing of action creator to object of props
const mapStateToProps = (state) => {
  return {
    cityList: state.cityList,
    showCityForm: state.showCityForm,
    name: state.name
  };
}

export default connect(mapStateToProps)(CitiesContainer);
/*dis-patch fetchCityList() action creator with prop
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleClick: showCityFormOnClick,
    handleChange: nameHandleChange,
    cityListFetchCities: cityListFetchCities
  }, dispatch);
};
connect to Redux for mapping props to use.
export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);
*/
