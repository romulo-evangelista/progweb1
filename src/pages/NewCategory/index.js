import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { getToken } from "../../services/auth";

import Header from '../../components/Header';

import './styles.css';

function NewCategory() {
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  const history = useHistory();

  async function handleCreateNewCategory(e) {
    e.preventDefault();

    if(!descricao) {
      setErro("Preencha os campos.");
    } else {
      try {
        await api.post('categories', {
          descricao,
        }, {
          authorization: getToken()
        });
        
        history.push('/admin');
      } catch(err) {
        console.log(err);
        setErro("Houve um problema com o cadastro, verifique seus dados.");
      }
    }
  }

  return (
    <div id="new-category-container">
      <Header />

      <div className="category-form">
        <p className="title">Nova Categoria</p>
        <form onSubmit={handleCreateNewCategory}>
          {erro && <p className="erro">{erro}</p>}

          <div className="descricao">
            <label htmlFor="descricao">Descrição</label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              onChange={ e => setDescricao(e.target.value) }
            />
          </div>
          
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewCategory;
