import React from 'react';

const OutputDisplay = (props) =>
  <div className="outputDisplay">
    <br/>
    <p className="temp-wrapper">Current Temperature:
      <span className="temp">{ props.tempOutput }</span>
      <span className="temp-symbol">&nbsp;°F</span>
    </p>
    <p className="cond-wrapper">Current Conditions:
      <span className="cond">{ props.condOutput }</span>
    </p>
    <br/>
  </div>

OutputDisplay.defaultProps = {
  tempOutput: 'Not Loaded Yet.',
  condOutput: 'Not Loaded Yet.'
};

export default OutputDisplay;
