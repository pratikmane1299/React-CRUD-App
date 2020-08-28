import React from 'react';

import { addProduct } from './../services/Products';
import ProductForm from '../components/ProductForm';
const initialState = {
  name: '',
  description: '',
  price: '',
  stock: 1,
  imageUrl: ''
};

class AddProduct extends React.Component {
  state = {
    product: initialState,
    isAdding: false,
    errors: {},
  }

  onValueChanged = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: ''
      }
    }));
  }

  onSubmit = (product) => {
    this.setState({
      isAdding: true,
    });
    addProduct(product)
      .then(res => {
        if (res.error) {
          this.setState({
            errors: res.error.validationErrors,
            isAdding: false
          });
        } else {
          this.setState({
            isAdding: false,
            product: initialState
          });
          this.props.history.push('/products');
        }
      });
  }

  render() {
    return (
      <>
        <h3 className="text-center">Add Product</h3>
        <ProductForm onFormSubmit={this.onSubmit} mode="add" isAdding={this.state.isAdding} errors={this.state.errors} />
      </>
    );
  }
};



export default AddProduct;