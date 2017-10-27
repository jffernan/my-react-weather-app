import React from 'react'

const City = ({cities}) =>
  <div className = "cityList" key={cities.id}>
    <li>{cities.name}</li>
  </div>

export default City;
