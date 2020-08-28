const API_URL = 'http://localhost:5000/api/v1/products';

export function getAllProducts() {
  return fetch(API_URL)
    .then(res => res.json());
}

export function addProduct(product) {
  return fetch(API_URL, {
    method: 'Post',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json());
}