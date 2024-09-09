import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Implement subscription logic
    console.log('Subscribing:', email);
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default Newsletter;
