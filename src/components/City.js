import React, { Component } from 'react'

export default class City extends Component {
//Define new State likeCounter: 0 ++
  constructor(props) {
    super(props);
    this.state = {
      likeCounter: 0
    };
  };

  handleClick = () => {
    this.props.onClick(this.props.cityName)
  }

//On click, updating total Likes in Rails DB
  handleClickLike = (id) => {
    let likeCounter = this.state.likeCounter;
    let self = this;
    let data = {
      total: likeCounter
    }

    fetch(`/api/v1/cities/${id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      self.setState({likeCounter: ++this.state.likeCounter});
    })
    .catch(error => alert("Error In Loading!"))
  };

  render () {
    return (
      <div className = "cityList" >
        <li onClick={this.handleClick}>
          {this.props.cityName}
        </li>
        <button
          className = "likeOption"
          onClick={this.handleClickLike.bind(this, this.props.cityName.id)}
          >LIKE
        </button>&nbsp;
        <span className = "likesCounter">
          [{this.state.likeCounter}]
        </span>
      </div>
    );
  }
}
