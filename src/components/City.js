import React, { Component } from 'react'

class City extends Component {
//fetchDataClick of existing city on click
  clickHandler = () => {
    this.props.handleClick(this.props.cityName)
  }
/*
  handleClick = () => {
    this.props.onClick(this.props.city.id) Grab id ????
  }
*/
  render () {
    return (
      <div className = "cityList" >
        <li onClick={this.clickHandler} >
          <b>{this.props.cityName}</b>
        </li>
      </div>
    )
  }
}

export default City;
