import React, { Component } from 'react'

class City extends Component {
//editing an existing city on click
//fetchData of existing city on click
  handleClick = () => {
    this.props.onClick(this.props.cities.id)
  }

  render () {
    return (
      <div className = "cityList"
        <li onClick={this.handleClick}>
          {this.props.cities.name}
        </li>
      </div>
    )
  }
}

export default City;

/*
const City = ({cities}) =>
  <div className = "cityList" key={cities.id}>
    <li>{cities.name}</li>
  </div>

export default City;
*/
