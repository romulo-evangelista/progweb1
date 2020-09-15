import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import bcryptNodejs from 'bcrypt-nodejs';

import api from '../../services/api';

import { isAuthorized } from "../../services/auth";

import Header from '../../components/Header';

import './styles.css';

function Profile() { 
  const [user, setUser] = useState({});
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const userId = localStorage.getItem('userId');

  const history = useHistory();

  useEffect(() => {
    if(isAuthorized()) {
      api.get(`administrators/${userId}`).then((response) => {
        setUser(response.data);
      });
    } else {
      api.get(`clients/${userId}`).then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  async function handleEditProfile(e) {
    e.preventDefault();
    try {
      let data = {
        nome: nome !== '' ? nome : user.nome,
        email: email !== '' ? email : user.email,
        login: login !== '' ? login : user.login,
      };

      if(senha && senha !== '') {
        const salt = bcryptNodejs.genSaltSync(8);
        data.senha = bcryptNodejs.hashSync(senha, salt);
        console.log(data.senha);
      }

      if(isAuthorized()){
        await api.put(`administrators/${userId}`, data);
        history.push('/admin');
      } else {
        data.endereco = endereco !== '' ? endereco : user.endereco;
        await api.put(`clients/${userId}`, data);
        history.push('/');
      }
          
    } catch(err) {
      console.log(err);
    }
  }

  return(
    <div id="profile-container">
      <Header />

      <div id="edit-profile">
        <p className="title">Editar perfil</p>
        <form onSubmit={handleEditProfile}>
          <div className="name">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={nome || user.nome}
              onChange={e => setNome(e.target.value) }
            />
          </div>
          
          { !isAuthorized() &&
            <div className="address">
              <label htmlFor="address">Endereco</label>
              <input
                type="text"
                name="address"
                id="address"
                value={endereco || user.endereco}
                onChange={ e => setEndereco(e.target.value) }
              />
            </div>
          }

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email || user.email}
              onChange={ e => setEmail(e.target.value) }
            />
          </div>

          <div className="login">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              id="login"
              value={login || user.login}
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
          <button className="button" type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;