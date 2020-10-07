import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import PurchaseList from '../../components/PurchaseList';

import './styles.css';

function Purchase() {
  return (
    <div id="purchase-container">
      <Header />

      <PurchaseList />
    </div>
  );
}

export default Purchase;
