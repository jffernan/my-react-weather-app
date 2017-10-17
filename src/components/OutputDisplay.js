import React from 'react';

const locOutput = this.props;
const tempOutput = this.props;
const condOutput = this.props;

const OutputDisplay = (props) =>
  <div className="outputDisplay">
    <br/>
    <p className="loc-wrapper">Current Location:
      <span className="loc">{ locOutput }</span>
    </p>
    <p className="temp-wrapper">Current Temperature:
      <span className="temp">{ tempOutput }</span>
      <span className="temp-symbol">°F</span>
    </p>
    <p className="cond-wrapper">Current Conditions:
      <span className="cond">{ condOutput }</span>
    </p>
    <br/>
  </div>;
/*
  OutputDisplay.defaultProps = {
    locOutput: 'Please Provide A Location.',
    tempOutput: 'Not Loaded Yet',
    condOutput: 'Not Loaded Yet'
  };
*/
  export default OutputDisplay;
