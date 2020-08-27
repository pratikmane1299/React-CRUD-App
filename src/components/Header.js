import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        Products Store
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" href="#">Add New Product</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;