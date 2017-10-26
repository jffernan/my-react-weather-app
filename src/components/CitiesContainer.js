import React, { Component } from 'react';

class CitiesContainer extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  };

  componentDidMount() {
    fetch('/api/v1/cities', {
      accept: 'application/json',
    })
    .then(response => {
      response.json()
      console.log(response)
      this.setState({cities: response.data})
    })
    .catch(error => console.log(error))
  };
*/
  render() {
    let cities = [
      {name: "New York"},
      {name: "Los Angeles"},
      {name: "Chicago"},
      {name: "Houston"},
      {name: "Phoenix"}
    ];
    
    let searchString = this.props.searchString.trim().toLowerCase();

    if(searchString.length > 0){
      cities = cities.filter(function(city){
        return city.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div className = "cityList">
        <ul>
          { cities.map(function(city){
            return <li>{city.name}</li>
          }) }
        </ul>
      </div>
    );
  }
};

export default CitiesContainer;
