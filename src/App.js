import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
