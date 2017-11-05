import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux'; //connect component to Redux store
//import { bindActionCreators } from 'redux';
import { nameHandleChange,
         showCityFormOnClick,
         fetchCities,
         fetchPostNewCity
       } from './actions';
//import * as actions from './actions.js';
export class CitiesContainer extends Component {
//call function thunked action (fetchCities)
  componentDidMount() {
    this.props.dispatch(fetchCities());
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
    const { name } = this.props;
    let self = this;
    let data = {
      name: name
    };
    this.props.dispatch(fetchPostNewCity(data));
//reset name st@te to a blank string onSubmit to clear input form
    self.setState({
      name: ''
    });
  };

  render() {
//Let not const for re-assignment in following filter & map methods
    let cityNamesList =[];
    let cities = this.props.cityList;
    const { name } = this.props;
    const isButtonEnabled =
      name.length > 0;

    let searchString = this.props.searchString.trim().toLowerCase();

    for (var i = 0; i < cities.length; i++) {
      cityNamesList.push(cities[i].name);
    };

    if(searchString.length > 0){
      cityNamesList = cityNamesList.filter(name =>
        name.toLowerCase().match( searchString )
      );
    };

    cityNamesList = cityNamesList.map(name =>
      <City
        cityName = {name}
        onClick={this.passCityName}
      />
    );

    return (
      <div>
        <ul>
          { cityNamesList }
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
            disabled={!isButtonEnabled}
          />
        }
      </div>
    );
  };
};
//map Redux st@te & dispatkhing of action creator to object of props
const mapStateToProps = (state) => {
  return {
    cityList: state.cityList,
    showCityForm: state.showCityForm,
    name: state.name
  };
};

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
