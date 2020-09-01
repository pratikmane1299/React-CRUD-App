import React from 'react';
import { getProductById } from '../services/Products';

export default class ProductDetails extends React.Component {
  state = {
    product: {},
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const { id } = this.props.match.params;
    getProductById(id)
      .then(res => {
        this.setState({
          product: res.product,
          isLoading: false,
        });
      });
  }

  render() {
    const { product, isLoading } = this.state;
    return (
      <div>
        {isLoading ?
          <span>Loading...</span> :
          <div className="card mt-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-5">
                  <img src={product.imageUrl} alt={product.name} className="product-details-image" />
                </div>
                <div className="col-7 pt-3 pl-5">
                  <h1>{product.name}</h1>
                  <p className="product-details-desc mt-3">{product.description}</p>
                  <p className="card-text mt-3">Rs {product.price}</p>
                  <p className="card-text mt-3">Stock - {product.stock}</p>
                </div>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}