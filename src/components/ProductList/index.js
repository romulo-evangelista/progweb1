import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { isAuthorized } from "../../services/auth";

import './styles.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      if(isAuthorized) {
        await api.delete(`products/${id}`);
        setProducts(products.filter(product => product.id !== id));
      } else {
        console.log("Sem autorização");
      }     
      
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div id="product-list">
      { products.map(product => (
        <div key={product.id} id="product-item">
          <img src="https://www.g4rh.com.br/novo/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png" alt="produto"/>
          <div className="product-info">
            <h1>{product.descricao}</h1>
            <p>
              Quantidade: {product.quantidade}
            </p>
            
            <span>R${product.preco}.00</span>
    
            {isAuthorized() ?
              <div className="options">
                <Link to="products/edit" className="button button-secondary">Editar</Link>
                <button onClick={() => handleDelete(product.id)}
                  type="button"
                  className="button button-delete">
                    Excluir
                </button>
              </div>

              : <div className="options">
                <Link to="product" className="button button-primary">Comprar</Link>
              </div>
            }
          </div>      
        </div>    
      ))}
    </div>
  );
}

export default ProductList;
