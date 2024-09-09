import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to ShopNow</h1>
        <p>Your one-stop shop for all things awesome.</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
