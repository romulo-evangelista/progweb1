import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

function Login() {
  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();

    history.push('/home');
  }

  return (
    <div id="login-container">
      <p>Aqui você é... aqui você pode!</p>

      <form onSubmit={handleLogin}>
        <div className="login">
          <label htmlFor="login">Login</label>
          <input type="text" name="login" id="login"/>
        </div>
        
        <div className="password">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password"/>
        </div>
        
        <button className="button" type="submit">Entrar</button>
        <Link className="button-register" to="/register">Cadastre-se</Link>
      </form>
    </div>
  );
}

export default Login;