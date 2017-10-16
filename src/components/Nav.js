import React from 'react';
//var {Link, IndexLink} = require('react-router');

class Nav extends React.Component{
  constructor(props) {
      super(props);
      //this.onSearch = this.onSearch.bind(this);
  }
    /*onSearch(e) {
        e.preventDefault();
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0) {
            //clear value
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        } */
    }
  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">My React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link to="/map" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Map Location</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
          /*
          <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
                  <ul className="menu">
                      <li>
                          <input type="search" ref="search" placeholder="Search weather by city" />
                      </li>
                      <li>
                          <input type="submit" className="button" value="Get Weather" />
                      </li>
                  </ul>
              </form>
          </div>  */
      </div>
    )
  }
};

export default Nav;
