import React from 'react';
import { useHistory } from 'react-router-dom';

import { deleteSession } from "../../services/auth";

import './styles.css';

function Logout() {
  
  const history = useHistory();

  async function handleLogout(e) {
    e.preventDefault();
  
    deleteSession(response.data.token);
    localStorage.removeItem('userId');
    history.push('/');
  }

  return (
    <div id="logout-container">
      <p className="title">Aqui você é... aqui você pode!</p>
      <form onSubmit={handleLogout}>
        <button className="button" type="submit">Sair</button>
      </form>
    </div>
  );
}

export default Logout;