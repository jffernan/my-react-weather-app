import React from 'react'

const City = (props) =>
  <div className = "cityList" >
    <li>{ props.cityName }</li>
  </div>

export default City;
/*
import React, { Component } from 'react'
export default class City extends Component {
  fetchDataClick of existing city on click
  handleClick = () => {
    this.props.onClick(this.props.city.name)
  }

  render (props) {
    return (
      <div className = "cityList" >
        <li>{this.props.cityName}</li>
      </div>
    )
  }
}
li onClick={this.handleClick} not working?
*/
