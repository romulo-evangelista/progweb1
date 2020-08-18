import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import './styles.css';

function Product() {
  return (
    <div id="product-content">
      <Header />

      <div className="product-details">
        <img src="https://www.g4rh.com.br/novo/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png" alt="produto"/>
        <div className="product-info">
          <h1>Nome do produto</h1>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis.
            Nec orci ornare consequat. Praesent lacinia
            ultrices consectetur.
          </p>
          
          
          <div className="product-footer">
            <span>R$00,00</span>

            <div className="group-button">
              <button>Comprar</button>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
