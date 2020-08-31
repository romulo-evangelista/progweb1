import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from "./services/auth";

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Product} />
        <PrivateRoute path="/cart" component={Cart} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
