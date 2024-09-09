import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="product-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => { addToCart(product); onClose(); }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductModal;
