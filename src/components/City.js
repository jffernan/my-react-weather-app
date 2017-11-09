import React from 'react';//ES6 don't need (this)
//presentational component as pure function
const City = (props) =>
  <div className = "cityList" >
    <li onClick={ props.handleClick }>
      { props.cityName }
    </li>
  </div>

export default City;
