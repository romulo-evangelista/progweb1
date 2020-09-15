import React from 'react';
import { Link } from 'react-router-dom';

import { isAuthorized } from "../../services/auth";

import Logout from '../Logout';

import './styles.css';

function Header() {
  const userId = localStorage.userId;

  const redir = isAuthorized() ? '/admin' : '/';

  return (
    <div id="header">
      <Link to={redir}><img src="logo" alt="Logo"/></Link>

      <input type="text" className="search" placeholder="Search" />

      <img src="perfil" alt="perfil"/>

      
      {userId ? <Logout /> : 
        <div>
          <Link to="/login">Login</Link>--- 
          <Link to="/register">Cadatre-se</Link>
        </div>
      }
    </div>
  );
}

export default Header;
