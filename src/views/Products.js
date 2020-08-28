import React from 'react';

import { getAllProducts, deleteProduct } from '../services/Products';
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

  deleteProduct = (id) => {
    deleteProduct(id)
      .then(res => {
        return getAllProducts();
      })
      .then(products => {
        this.setState({
          products
        });
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
              <Product 
                key={product._id} 
                product={product} 
                deleteProduct={this.deleteProduct} 
              />
            ))}
          </div>
        }
      </div>
    );
  }
}

export default Products