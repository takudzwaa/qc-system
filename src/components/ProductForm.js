// ProductForm.js
import React, { useState } from 'react';
import api from '../services/api';

const ProductForm = () => {
  const [productName, setProductName] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to add a new product
    try {
      await api.post('/products', { name: productName });
      // You may want to refresh the product list after adding a new product
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
