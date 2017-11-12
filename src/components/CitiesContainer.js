import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux'; //connect component to Redux store
import { bindActionCreators } from 'redux';//import { (4) actions } from './actions';
import * as actions from './actions.js';

export class CitiesContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchCities();
  }

  passCityName =  ( name ) => {
    this.props.fetchDataClick(name)
  }

  handleToggle() {
    this.props.actions.toggleCityFormOnClick(this.props.toggleCityForm);
  }

  handleChange = (event) => {
    this.props.actions.nameHandleChange(event.target.value);
  }

  addNewCity = (handleSubmit) => {
    handleSubmit.preventDefault();
    const { name } = this.props;
    let data = {
      name: name
    };
    this.props.actions.fetchPostNewCity(data);
  };

  deleteCity = (id) => {
    fetch(`/api/v1/cities/${id}/`, {
      method: "DELETE"
    })
    .then(response => {
      let cities = this.props.cityList.filter((city) => {
        return city.id !== id;
        });
      this.setState({ cityList: cities
      });
    })
    .then(id => {
      window.location.reload();
    })
  };

  render() {
//Let not const for re-assignment in following filter & map methods
    let cities = this.props.cityList;
    let filterLocation = this.props.filterLocation.trim().toLowerCase();
    if (filterLocation.length > 0) {
      cities = cities.filter(city =>
        city.name.toLowerCase().match( filterLocation )
      );
    };

    let name = this.props.name;
    const isButtonEnabled =
      name.length > 0;
//Keys don’t get passed to components
    cities = cities.map(city =>
      <City key={city.id}
        cityName = {city.name}
        handleClick={this.passCityName.bind(this, city.name)}
        onDelete={this.deleteCity.bind(this, city.id)}
      />
    );
//pass id value as prop w/ different name props.cityName.id to child, City comp
    return (
      <div>
        <ul>
          { cities }
        </ul>
        <div className="addNewCity" >
          <Button
            onClick={this.handleToggle.bind(this)}
            type="submit"
            style={{marginBottom: '5px'}}
            bsStyle="primary" active>
            <span className = "button-text">
              Add New City
            </span>
          </Button>
        </div>
        { this.props.toggleCityForm &&
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
    toggleCityForm: state.toggleCityForm,
    name: state.name
  };
};
//dis-patch action creators with props
const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);
