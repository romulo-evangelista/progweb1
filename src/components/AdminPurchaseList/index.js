import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

function PurchaseList() {
  const [purchasesProducts, setPurchasesProducts] = useState([]);

  useEffect(() => {
    api.get('/purchases').then(response => {
      setPurchasesProducts(response.data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  return (
    <div id="purchase-list">
      { purchasesProducts.map(purchase => (
        <div key={purchase.purchase_id} id="purchase-item">
          <h1>{purchase.product.descricao}</h1>
          <h4>Comprador: {purchase.purchase.client.nome}</h4>
        </div>
      ))}
    </div>
  );
}

export default PurchaseList;
