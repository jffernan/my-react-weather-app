import React from 'react';
//import { connect } from 'react-redux';

const Map = (props) => {

  function slugify(text){
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  return (
    <div>
      <h1 className="text-center page-title">Map Location</h1>
        <h4>
          <a target="_blank" href={"https://www.google.com/maps/search/" + {slugify(props.gLocation)}}
            onClick="return alert('Are you sure you want to leave?')">
            'Click' To GoogleMap
            </a>
            <span className=".gloc">
              { props.gLocation }
            </span>
        </h4>
    </div>
  )
};

export default Map;
//+ props.route.gLocation DOES NOT WORK in rrv4.0
//do need extra{} in Line 19???? + slugify(props.gLocation)
//Try: <a href={"mailto:" + this.props.email}>email</a>
//<a href={this.props.url} className="link-title" ref="title"> {this.props.title}</a>
//<a href="#delete" onClick={this.deleteObj}></a>
