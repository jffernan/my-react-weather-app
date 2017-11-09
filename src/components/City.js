import React, { Component } from 'react'

export default class City extends Component {
//Define new State likeCounter: 0 ++
  constructor(props) {
    super(props);
    this.state = {
      likeCounter: 0
    };
      this.handleClickLike = this.handleClickLike.bind(this);
  };

  handleClick = () => {
    this.props.onClick(this.props.cityName)
  }
//city or name in parameter
  handleClickLike = () => {
    let likeCounter = this.state.likeCounter;
    let name = this.props.cityName;
    let self = this;
    let data = {
      total: likeCounter,
      name: name
    }

    fetch(`/api/v1/cities/${name.id}`, {
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
