import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/products" component={Product} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default Routes;
