import React, { Component } from 'react'

class City extends Component {
/*fetchDataClick of existing city on click
  handleClick = () => {
    this.props.onClick(this.props.city.name)
  }
*/
  render () {
    return (
      <div className = "cityList" >
        <li>{this.props.city.name}</li>
      </div>
    )
  }
}

export default City;
//li onClick={this.handleClick} not working?
