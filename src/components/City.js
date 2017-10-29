import React, { Component } from 'react'

class City extends Component {
//fetchDataClick of existing city on click
  clickHandler = () => {
    this.props.fetchDataClick(this.props.name)
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
          <b>{this.props.name}</b>
        </li>
      </div>
    )
  }
}

export default City;
