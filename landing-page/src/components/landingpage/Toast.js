import React from 'react';
import './Toast.css';

const Toast = ({ message, isVisible }) => (
  <div className={`toast ${isVisible ? 'visible' : ''}`}>
    {message}
  </div>
);

export default Toast;
