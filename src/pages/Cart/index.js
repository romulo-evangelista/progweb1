import React from 'react';

import Header from '../../components/Header';
import CartItem from '../../components/CartItem';

import './styles.css';

function Cart() {
  return (
    <div id="cart-container">
      <Header />

      <div className="cart-list">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default Cart;