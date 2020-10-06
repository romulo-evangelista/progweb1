import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

function Product(props) {
  const id = props.match.params.id;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get(`products/${id}`).then(response => {
      setProduct(response.data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

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
            <Link to="/buy" className="button button-primary">Comprar</Link>
            <Link to="/cart" className="button button-secondary">Adicionar ao carrinho</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
