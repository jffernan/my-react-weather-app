import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
  borderRadius: '10px',
  position: 'center'
}

const NavBar = () =>
  <div className="menu">
    <ul id="nav">
      <li>
      <NavLink to="/"
        activeClassName="active"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue',
          fontWeight: 'bold'
        }}
        //onClick={ refreshPage }
        //refresh="true" does NOT WORK in RRv4.0
      >Home
      </NavLink>
      </li>
      <li>
      <Link to="/map"
        activeClassName="active"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue',
          fontWeight: 'bold'}}
      >Map
      </Link>
      </li>
      <li>
      <Link to="/about"
        activeClassName="active"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue',
          fontWeight: 'bold'
        }}
      >About
      </Link>
      </li>
    </ul>
  </div>

//let refreshPage = () =>
//  window.location.reload();

export default NavBar;
