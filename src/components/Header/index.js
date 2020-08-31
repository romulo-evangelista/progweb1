import React from 'react';
import { Link } from 'react-router-dom';

import Logout from '../Logout';

import './styles.css';

function Header() {
  const userId = localStorage.userId;

  return (
    <div id="header">
      <Link to="/home"><img src="logo" alt="Logo"/></Link>

      <input type="text" className="search" placeholder="Search" />

      <img src="perfil" alt="perfil"/>

      
      {userId ? <Logout /> : 
        <div>
          <Link to="/">Login</Link>--- 
          <Link to="/register">Cadatre-se</Link>
        </div>
      }
    </div>
  );
}

export default Header;
