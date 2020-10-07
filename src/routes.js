import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated, isAuthorized } from "./services/auth";

import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import NewCategory from './pages/NewCategory';
import NewProduct from './pages/NewProduct';
import Product from './pages/Product';
import Purchase from './pages/Purchase';
import Profile from './pages/Profile';
import Register from './pages/Register';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() && isAuthorized() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AdminRoute path="/admin" component={Admin} />
        <AdminRoute path="/products/new" exact component={NewProduct} />
        <AdminRoute path="/categories/new" exact component={NewCategory} />

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/products/:id" exact component={Product} />
        <Route path="/purchases" exact component={Purchase} />
        
        <PrivateRoute path="/cart" component={Cart} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
