import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
  return (
    <div id="header">
      <Link to="/home"><img src="logo" alt="Logo"/></Link>

      <input type="text" className="search" placeholder="Search" />

      <img src="perfil" alt="perfil"/>
    </div>
  );
}

export default Header;
