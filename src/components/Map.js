import React from 'react';
//import { connect } from 'react-redux';
/*import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

Map.defaultProps = {
  center: { lat: 40.7446790, lng: -73.9485420 },
  zoom: 11
};
*/

export default class Map extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center page-title">Map Location</h1>
        <div className="page-text">
          <p><b>Search for an address on map:</b></p>
        </div>
      </div>
    );
  }
}

//export default Map;
