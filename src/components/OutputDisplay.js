import React from 'react';

const OutputDisplay = (props) =>
  <div className="outputDisplay">
    <br/>
    <p className="loc-wrapper">Current Location:
      <span className="loc">{ props.locOutput }</span>
    </p>
    <p className="temp-wrapper">Current Temperature:
      <span className="temp">{ props.tempOutput }</span>
      <span className="temp-symbol"> °F</span>
    </p>
    <p className="cond-wrapper">Current Conditions:
      <span className="cond">{ props.condOutput }</span>
    </p>
    <br/>
  </div>

OutputDisplay.defaultProps = {
  locOutput: 'Please Enter Above.',
  tempOutput: 'Not Loaded Yet.',
  condOutput: 'Not Loaded Yet.'
};

export default OutputDisplay;
