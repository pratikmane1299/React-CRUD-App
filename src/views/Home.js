import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="jumbotron mt-4">
    <h1 className="display-3">Products Store</h1>
    <hr className="my-4" />
    <p className="lead">This is simple CRUD app made with React.</p>
    <p className="lead">
      <Link to="/products" className="btn btn-primary btn-lg" href="#" role="button">View Products</Link>
    </p>
  </div>
);

export default Home;