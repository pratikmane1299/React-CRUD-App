import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Header from './components/Header';
import Products from './views/Products';
import AddProduct from './views/AddProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/add" component={AddProduct} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
