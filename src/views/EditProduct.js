import React from 'react';

import { getProductById, updateProduct } from '../services/Products';
import ProductForm from '../components/ProductForm';

const initialState = {
  name: '',
  description: '',
  price: '',
  stock: 1,
  imageUrl: ''
};

class EditProduct extends React.Component {
  state = {
    product: initialState,
    isEditing: false,
    errors: {},
    isLoading: true,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getProductById(id)
      .then(res => {
        this.setState({ isLoading: false, product: res.product });
      });
  }

  onSubmit = (product) => {
    this.setState({
      isEditing: true,
    });
    updateProduct(product, product._id)
      .then(res => {
        if (res.error) {
          this.setState({
            errors: res.error.validationErrors,
            isEditing: false
          });
        } else {
          this.setState({
            isEditing: false,
            product: initialState
          });
          this.props.history.push('/products');
        }
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        {isLoading ?
          <p className="text-center">Loading...</p> :
          <div>
            <h3 className="text-center">Edit Product</h3>
            <ProductForm
              product={this.state.product}
              onFormSubmit={this.onSubmit}
              mode="edit"
              isEditing={this.state.isEditing}
              errors={this.state.errors}
            />
          </div>
        }
      </>
    );
  }
};

export default EditProduct;