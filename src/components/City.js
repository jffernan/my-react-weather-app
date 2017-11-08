import React, { Component } from 'react'

export default class City extends Component {

  handleClick = () => {
    this.props.onClick(this.props.cityName)
  }

  render (props) {
    return (
      <div className = "cityList" >
        <li onClick={this.handleClick}>
          {this.props.cityName}
        </li>
        <button
          className = "addNewCity"
          onClick={this.props.handleLikeClick}
          >LIKE
        </button>
        <span className = "likesCounter">
          [{this.props.likeCounter}]
        </span>
      </div>
    )
  }
}
