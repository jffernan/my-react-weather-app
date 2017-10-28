import React, { Component } from 'react'

class City extends Component {
//fetchDataClick of existing city on click
  clickHandler = () => {
    this.props.fetchDataClick(this.props.name)
  }

  render () {
    return (
      <div className = "cityList"
        <li onClick={this.clickHandler}>
          {this.props.name}
        </li>
      </div>
    )
  }
}

export default City;
