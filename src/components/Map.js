import React from 'react';

const Map = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Map Location</h1>
        <h4>
          <a target="_blank" href={"https://www.google.com/maps/search/" + encodeURIComponent(props.gLocation)}
            onclick="window.confirm('Are you sure you want to leave?')">
            'Click' Here To GoogleMap </a>
          <span className="gloc">{ props.gLocation }</span>
        </h4>
    </div>
  )
};

export default Map;
//+ props.route.gLocation DOES NOT WORK in React-Router Version 4.0
