import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function Register() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    if(!nome || !endereco || !email || !login || !senha) {
      setErro("Preencha os campos.");
    } else {
      try {
        await api.post('clients', {
          nome,
          endereco,
          email,
          login,
          senha
        });
        
        history.push('/login');
      } catch(err) {
        console.log(err);
        setErro("Houve um problema com o cadastro, verifique seus dados.");
      }
    }
  }

  return(
    <div id="register-container">
      <p className="title">Nova Conta</p>
      <form onSubmit={handleRegister}>
        {erro && <p className="erro">{erro}</p>}

        <div className="name">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={ e => setNome(e.target.value) }
          />
        </div>
        
        <div className="address">
          <label htmlFor="address">Endereco</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={ e => setEndereco(e.target.value) }
          />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={ e => setEmail(e.target.value) }
          />
        </div>

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
        <button className="button" type="submit">Registrar</button>
        <Link className="button-login" to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Register