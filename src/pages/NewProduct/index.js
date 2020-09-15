import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { getToken } from "../../services/auth";

import Header from '../../components/Header';

import './styles.css';

function NewProduct() {
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [foto, setFoto] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [erro, setErro] = useState('');

  const history = useHistory();

  async function handleCreateNewProduct(e) {
    e.preventDefault();

    if(!descricao || !preco || !foto || !quantidade) {
      setErro("Preencha os campos.");
    } else {
      try {
        await api.post('products', {
          descricao,
          preco,
          foto,
          quantidade
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
    <div id="new-product-container">
      <Header />

      <div className="product-form">
        <p className="title">Novo Produto</p>
        <form onSubmit={handleCreateNewProduct}>
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
          
          <div className="preco">
            <label htmlFor="preco">Preco</label>
            <input
              type="text"
              name="preco"
              id="preco"
              onChange={ e => setPreco(e.target.value) }
            />
          </div>

          <div className="foto">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              name="foto"
              id="foto"
              onChange={ e => setFoto(e.target.value) }
            />
          </div>
          
          <div className="quantidade">
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              id="quantidade"
              onChange={ e => setQuantidade(e.target.value) }
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
