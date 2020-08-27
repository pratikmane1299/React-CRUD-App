import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Header from './components/Header';
import Products from './views/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
