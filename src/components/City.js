import React, { Component } from 'react'

export default class City extends Component {
//Define new State likeCounter: 0 ++
  constructor(props) {
    super(props);
    this.state = {
      likeCounter: 0};
      this.handleClickLike = this.handleClickLike.bind(this);
  };

  handleClick = () => {
    this.props.onClick(this.props.cityName)
  }

  handleClickLike = () => {
    this.setState({likeCounter: ++this.state.likeCounter});
  }

  render () {
    return (
      <div className = "cityList" >
        <li onClick={this.handleClick}>
          {this.props.cityName}
        </li>
        <button
          className = "likeOption"
          onClick={this.handleClickLike}
          >LIKE
        </button>&nbsp;
        <span className = "likesCounter">
          [{this.state.likeCounter}]
        </span>
      </div>
    );
  }
}
