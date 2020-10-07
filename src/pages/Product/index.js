import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

function Product(props) {
  const product_id = props.match.params.id;
  const [product, setProduct] = useState([]);

  const userId = localStorage.getItem('userId');

  const history = useHistory();

  useEffect(() => {
    api.get(`products/${product_id}`).then(response => {
      setProduct(response.data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  async function handleBuy() {
    try {
      await api.post('/purchases', {
        client_id: userId,
        product_id,
        quant: 1
      });
      
      history.push('/purchases');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div id="product-content">
      <Header />

      <div className="product-details">
        <img src="https://www.g4rh.com.br/novo/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png" alt="produto"/>
        <div className="product-info">
        
          <h1>{product.descricao}</h1>
          <p>
            Quantidade: {product.quantidade}
          </p>
          
          <span>R${product.preco}.00</span>

          <div className="group-button">
            <button onClick={() => handleBuy()} className="button button-primary">Comprar</button>
            <Link to="/cart" className="button button-secondary">Adicionar ao carrinho</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
