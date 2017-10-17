import React from 'react';
//var {Link} = require('react-router');
//import { connect } from 'react-redux';

var Map = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Map Location</h1>
      <div className="page-text">
        <p><b>Search for an address on map:</b></p>
      </div>
    </div>
  )
};

export default Map;

/*
import React from 'react';
import { connect } from "react-redux";

class Map extends React.Component {

  constructor(props) {
    //console.log("---- constructor: map state to props, call before constructor ----");

    // super props
    super(props);
  }

  componentDidMount() {
    //console.log("---- in componentDidMount ----");

    // init
    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });

    map.addMarker({
      lat: this.props.lat,
      lng: this.props.lng
    });

  }

  // component did update, won't be called when page reload.
  componentDidUpdate() {

    //test
    //console.log("---- in componentDidUpdate ----");

    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });

    map.addMarker({
      lat: this.props.lat,
      lng: this.props.lng
    });
  }

  render() {

    return (
      <div className="map-holder">
        <p>Loading...</p>
        <div id="map"></div>
      </div>
    );
  }

}


function mapStateToProps(state) {

  //test
  // The first time global state is empty, because no one changes global state.
  // When someone does something on UI, global state changes.
  //console.log("---- mapStateToProps ----");
  //console.log(state);

  // This will together with the props pass down
  // you cannot call state.lat.
  // because you need to use the reducer as identifier.
  // e.g. state.search.lat or state.toggleFavLocation.toggleFavLocation
  return {
    lat: state.search.lat,
    lng: state.search.lng
  };
}


export default connect(mapStateToProps, {  })(Map);
*/