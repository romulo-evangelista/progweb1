import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import CategoryList from '../../components/CategoryList';
import AdminPurchaseList from '../../components/AdminPurchaseList';

import './styles.css';

function Admin() {
  return (
    <div id="admin-container">
      <Header />
      
      <div className="banner">
        <h1>Painel de Controle.</h1>
        <p>Gerencie seu negócio!</p> 
      </div>

      <article>
        <div className="product-container">
          <div className="products-header">
            <p>Produtos</p>
            <Link to='/products/new'><span>+</span> Novo produto</Link>
          </div>
          <ProductList />
        </div>

        <div className="category-container">
          <div className="categories-header">
            <p>Categorias</p>
            <Link to='/categories/new'><span>+</span> Nova categoria</Link>
          </div>
          <CategoryList />
        </div>

        <div className="purchase-container">
          <div className="purchases-header">
            <p>Compras feitas pelos clientes</p>
          </div>
          <AdminPurchaseList />
        </div>
      </article>
    </div> 
  );
}

export default Admin;
