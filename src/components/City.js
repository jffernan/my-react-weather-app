import React, { Component } from 'react'

export default class City extends Component {
//Define new State likeCounter: 0 ++
  constructor(props) {
    super(props);
    this.state = {
      likeCounter: 0
    };
  };

  handleClickLike = () => {
    const { id } = this.props;
    let likeCounter = this.state.likeCounter;
    let self = this;
    let data = {
      id: id,
      total: likeCounter + 1
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
      self.setState({likeCounter: this.state.likeCounter + 1});
    })
    .catch(error => alert("Error In Loading!"))
  };

  render () {
    return (
      <div className = "cityList" >
        <li onClick={this.props.handleClick}>
          {this.props.cityName}
        </li>
        <button
          className = "likeOption"
          onClick={this.handleClickLike.bind(this, this.props.id)}
          >LIKE
        </button>&nbsp;
        <span className = "likesCounter">
          [{this.state.likeCounter}]
        </span>
      </div>
    );
  }
}
