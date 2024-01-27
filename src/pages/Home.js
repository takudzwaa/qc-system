// Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import SearchBar from '../components/SearchBar';
import api from '../services/api';

const Home = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch initial product list when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = async (searchTerm) => {
    // Fetch products based on the search term
    try {
      const response = await api.get(`/products/search?term=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const navigateToProductDetails = (productId) => {
    // Example of navigating to a product details page
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <h1>Fish Palace Quality Control System</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={searchResults} onItemClick={navigateToProductDetails} />
      <ProductForm />
    </div>
  );
};

export default Home;
