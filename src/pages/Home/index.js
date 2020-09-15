import React from 'react';

import ProductList from '../../components/ProductList';
import Header from '../../components/Header';

import './styles.css';

function Home() {
  return (
    <div id="home-container">
      <Header />
      
      <div className="banner">
        <h1>Promoção, somente hoje.</h1>
        <p>Frete <span>GRÁTIS</span> para todo o Brasil!</p> 
      </div>

      <div className="product-list">
        <ProductList />
      </div>

    </div> 
  );
}

export default Home;
