import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => (
  <div key={product._id} className="card p-0 col-3">
    <img className="card-img-top" src={product.imageUrl} alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">Rs {product.price}</p>
      <div className="d-flex justify-content-around">
        <Link to={`/products/${product._id}/edit`} className="btn btn-info">Edit</Link>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
);

export default Product;