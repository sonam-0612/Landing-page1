import React, { useState } from 'react';
import './ProductShowcase.css'; // Ensure you have the CSS file

// Import images
import product1Img from '../assets/product1.jpg';
import product2Img from '../assets/product2.jpg';
import product3Img from '../assets/product3.jpg';
import product4Img from '../assets/product4.jpg';
import product5Img from '../assets/product5.jpg';

const products = [
  { id: 1, name: 'Classic Leather Jacket', price: 1900, image: product1Img, category: 'Clothing' },
  { id: 2, name: 'Eco-Friendly Yoga Mat', price: 3000, image: product2Img, category: 'Accessories' },
  { id: 3, name: 'Electronic eyebrow Trimmer', price: 9000, image: product3Img, category: 'Electronics' },
  { id: 4, name: 'Classic Jacket', price: 2039, image: product4Img, category: 'Clothing' },
  { id: 5, name: 'Classic Shirt', price: 1039, image: product5Img, category: 'Clothing' }
  // Add more products here
];

const categories = ['All', 'Clothing', 'Accessories', 'Electronics'];

const ProductShowcase = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Price: Low to High');

  const filteredProducts = products.filter(product =>
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'Price: Low to High') {
      return a.price - b.price;
    } else if (sortOption === 'Price: High to Low') {
      return b.price - a.price;
    } else {
      // Implement other sorting options if needed
      return 0;
    }
  });

  return (
    <div>
      <div className="filters">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>
      <div className="product-showcase">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <div className="product-title">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
