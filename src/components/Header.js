import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Products Store
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/products/add" className="nav-link">Add New Product</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;