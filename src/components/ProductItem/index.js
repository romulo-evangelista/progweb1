import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function ProductItem() {
  return (
    <div id="product-item">
      <img src="https://www.g4rh.com.br/novo/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png" alt="produto"/>
      <div className="product-info">
        <h1>Nome do produto</h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis.
          Nec orci ornare consequat. Praesent lacinia
          ultrices consectetur.
        </p>
        
        <span>R$00,00</span>

        <Link to="/products" className="button button-primary">Comprar</Link>
       
      </div>      
    </div>
  );
}

export default ProductItem;
