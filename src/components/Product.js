import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, deleteProduct }) => (
  <div key={product._id} className="col-md-3">
    <div className="card">
      <img className="card-img-top" src={product.imageUrl} alt={product.name} />
      <div className="card-body">
        <Link className="h5 text-dark" to={`/products/${product._id}`}>{product.name}</Link>
        {/* <p className="card-text">{product.description}</p> */}
        <p className="card-text">Rs {product.price}</p>
      </div>
      <div className="card-footer d-flex justify-content-around">
        <Link to={`/products/${product._id}/edit`} className="btn btn-info">Edit</Link>
        <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
      </div>
    </div>
  </div>
);

export default Product;