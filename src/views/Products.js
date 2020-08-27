import React from 'react';

import { getAllProducts } from '../services/Products';
import Product from '../components/Product';

class Products extends React.Component {
  state = {
    products: [],
    isLoading: true,
  }

  componentDidMount() {
    getAllProducts()
      .then(products => {
        this.setState({
          isLoading: false,
          products
        })
      });
  }

  render() {
    const { isLoading, products } = this.state;
    return (
      <div>
        {isLoading ?
          <span>Loading</span> :
          <div className="row">
            {products.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        }
      </div>
    );
  }
}

export default Products