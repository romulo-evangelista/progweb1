import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { createSession, isAuthorized } from "../../services/auth";

import './styles.css';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    if (!login || !senha) {
      setErro("Preencha login e senha para continuar!");
    } else {
      try {
        const response = await api.post('sessions', { login, senha });
        
        createSession(response.data.token, response.data.userType);
        localStorage.setItem('userId', response.data.id);        

        isAuthorized() ? history.push('/admin') : history.push('/');
      } catch(err) {
        setErro("Houve um problema com o login, verifique suas credenciais.");
      }
    }
  }

  return (
    <div id="login-container">
      <p className="title">Aqui você é... aqui você pode!</p>
      <form onSubmit={handleLogin}>
        {erro && <p className="erro">{erro}</p>}

        <div className="login">
          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="login"
            id="login"
            onChange={ e => setLogin(e.target.value) }
          />
        </div>
        
        <div className="password">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={ e => setSenha(e.target.value) }
          />
        </div>
        <button className="button" type="submit">Entrar</button>
        <Link className="button-register" to="/register">Cadastre-se</Link>
      </form>
    </div>
  );
}

export default Login;