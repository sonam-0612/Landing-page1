import React, { useState } from 'react';
import './Header.css';
import cartLogo from '../assets/cart-logo.png'; // Adjust the path as needed

const Header = ({ cartCount }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search functionality or redirect
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="header">
      <div className="logo">ShopNow</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="cart-icon">
        <img src={cartLogo} alt="Cart" className="cart-logo" />
        <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
