import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Here you can handle the submission of the product data
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Product Name:
            <input type="text" name="name" value={product.name} onChange={handleChange} />
          </label>
          <label>
            Product Price:
            <input type="text" name="price" value={product.price} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;