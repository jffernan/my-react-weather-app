import React from 'react';

//const location = this.props.location;
//const currentTemp = this.props.currentTemp;
//const currentCond = this.props.currentCond;

const OutputDisplay = (props) =>
  <div className="outputDisplay">
    <br/>
    <p className="loc-wrapper">Current Location:
      <span className="loc">location</span>
    </p>
    <p className="temp-wrapper">Current Temperature:
      <span className="temp"> currentTemp </span>
      <span className="temp-symbol">°F</span>
    </p>
    <p className="cond-wrapper">Current Conditions:
      <span className="cond"> currentCond </span>
    </p>
    <br/>
  </div>;

  export default OutputDisplay;
