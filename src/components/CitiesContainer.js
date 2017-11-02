import React, { Component } from 'react';
import City from './City'
import CityForm from './CityForm'
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import { handleChange,
         handleClick,
         fetchCityList,
         fetchAddNewCity } from './actions';

class CitiesContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCityList());//call function thunked action
  };

  passCityName =  ( name ) => {
    this.props.fetchDataClick(name)
  };
//this.props.store.dispatch
  handleClick() {
    this.props.dispatch(handleClick(this.props.showCityForm));
  };
//this.props.store.dispatch
  handleChange = (event) => {
    this.props.dispatch(handleChange(event.target.value));
  };

  addNewCity = (handleSubmit) => {
    handleSubmit.preventDefault();
    let name = this.props.name;
    this.props.dispatch(fetchAddNewCity(name));
    this.setState({
      name: ''
    });
  };

  render() {
    let cities = this.props.cityList;
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

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(CitiesContainer);
