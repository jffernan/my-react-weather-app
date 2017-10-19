import React from 'react';
//import { connect } from 'react-redux';
//import GoogleMapReact from 'google-map-react';

const Map = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Map Location</h1>
        <h4>
          <a href="https://www.google.com/maps/search/{ props.location}" data-confirm="Are you sure you want to visit an external website?">
            'Click' To Google Map Your Location
          </a>
        </h4>
    </div>
  )
};

export default Map;
