import React, { useState } from 'react';
import Header from './components/landingpage/Header';
import HeroSection from './components/landingpage/HeroSection';
import ProductShowcase from './components/landingpage/ProductShowcase';
import NewsletterSubscription from './components/landingpage/Newsletter';
import Footer from './components/landingpage/Footer';
import Toast from './components/landingpage/Toast';
import ProductModal from './components/landingpage/ProductModal';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    showToast(`${product.name} added to cart`);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <HeroSection />
      <ProductShowcase addToCart={addToCart} onProductClick={setSelectedProduct} />
      <NewsletterSubscription showToast={showToast} />
      <Footer />
      <Toast message={toast.message} isVisible={toast.visible} />
      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </div>
  );
};

export default App;
