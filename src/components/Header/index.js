import React from 'react';
import { Link } from 'react-router-dom';

import Logout from '../Logout';

import './styles.css';

function Header() {
  return (
    <div id="header">
      <Link to="/home"><img src="logo" alt="Logo"/></Link>

      <input type="text" className="search" placeholder="Search" />

      <img src="perfil" alt="perfil"/>

      <Logout />
    </div>
  );
}

export default Header;
