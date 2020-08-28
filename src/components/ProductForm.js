import React from 'react';

const initialState = {
  name: '',
  description: '',
  price: '',
  stock: 1,
  imageUrl: ''
};

class ProductForm extends React.Component {

  state = {
    product: initialState,
    errors: {},
    isAdding: false,
    isEditing: false,
  }

  componentDidMount() {
    this.setState({
      errors: this.props.errors,
      isAdding: this.props.isAdding,
      isEditing: this.props.isEditing,
      product: this.props.product
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    } 
    if (prevProps.isAdding !== this.props.isAdding) {
      this.setState({ isAdding: this.props.isAdding });
    }
    if (prevProps.isEditing !== this.props.isEditing) {
      this.setState({ isEditing: this.props.isEditing });
    }
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

  validateForm() {
    let errors = {};
    const { name, description, price, stock, imageUrl } = this.state.product;

    if (name.trim() === '') errors.name = 'Name is required';
    if (description.trim() === '') errors.description = 'Description is required';
    if (isNaN(price) && Number(price) <= 0) errors.price = 'Price should be greater than 0';
    if (price === '') errors.price = 'Price is required';
    if (isNaN(stock) && Number(stock) <= 0) errors.stock = 'Stock should be greater than or equal to 1';
    if (imageUrl.trim() === '') errors.imageUrl = 'Image Url is required';

    return errors;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors
      });
    } else {
      this.props.onFormSubmit(this.state.product);
    }
  }

  render() {
    const { errors, isAdding, isEditing, product: { name, description, price, stock, imageUrl } } = this.state;
    const { mode } = this.props;
    return (
      <div className="card w-50 mx-auto">
        <div className="card-body">
          <form onSubmit={this.onSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter a Name"
                className={errors.name ? 'is-invalid form-control' : 'form-control'}
                value={name}
                onChange={this.onValueChanged}
              />
              {errors.name && <span className="invalid-feedback">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Enter a description"
                className={errors.description ? 'is-invalid form-control' : 'form-control'}
                value={description}
                onChange={this.onValueChanged}
              />
              {errors.description && <span className="invalid-feedback">{errors.description}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter a price"
                className={errors.price ? 'is-invalid form-control' : 'form-control'}
                value={price}
                onChange={this.onValueChanged}
              />
              {errors.price && <span className="invalid-feedback">{errors.price}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                name="stock"
                min="1"
                placeholder="Enter a quantity"
                className={errors.stock ? 'is-invalid form-control' : 'form-control'}
                value={stock}
                onChange={this.onValueChanged}
              />
              {errors.stock && <span className="invalid-feedback">{errors.stock}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image Url</label>
              <input
                type="text"
                name="imageUrl"
                placeholder="http://example.com/image.jpg"
                className={errors.imageUrl ? 'is-invalid form-control' : 'form-control'}
                value={imageUrl}
                onChange={this.onValueChanged}
              />
              {errors.imageUrl && <span className="invalid-feedback">{errors.imageUrl}</span>}
            </div>
            <button type="submit" className="btn btn-info btn-block">
              {mode === 'add' ? !isAdding ? 'Add Product' : 'Adding Product' : !isEditing ? 'Update Product' : 'Updating Product...'}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default ProductForm