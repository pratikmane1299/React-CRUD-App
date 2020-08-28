import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Header from './components/Header';
import Products from './views/Products';
import AddProduct from './views/AddProduct';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mt-2">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/add" component={AddProduct} />
          <Route path="/products/:id/edit" component={EditProduct} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
