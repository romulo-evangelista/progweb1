import React from 'react';

import './styles.css';

function CartItem() {
  return (
    <div id="cart-item">
      <img src="https://www.g4rh.com.br/novo/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png" alt="produto"/>
      <div className="product-info">
        <h1>Nome do produto</h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis.
          Nec orci ornare consequat. Praesent lacinia
          ultrices consectetur.
        </p>
        <div className="footer-info">
          <div className="product-quant">
            <div className="less">-</div>
            <input type="number" name="quant" id="quant"/>
            <div className="more">+</div>
          </div>
         
          <span>R$00,00</span>       

        </div>      
      </div>      
    </div>
  );
}

export default CartItem;