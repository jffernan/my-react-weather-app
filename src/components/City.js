import React, { Component } from 'react'

export default class City extends Component {

  handleClick = () => {
    this.props.onClick(this.props.cityName)
  }

  handleAdoptPet = () => this.props.onAdoptPet(this.props.city.id)

  render (props) {
    return (
      <div className = "cityList" >
        <li onClick={this.handleClick}>
          {this.props.cityName}
        </li>
        <button
          className = "likeOption"
          onClick={this.handleAdoptPet}
          >LIKE
        </button>&nbsp;
        <span className = "likesCounter">
          [{this.props.likeCounter}]
        </span>
      </div>
    )
  }
}
