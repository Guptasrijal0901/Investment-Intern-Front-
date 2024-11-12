import React, { useState } from 'react';
import axios from 'axios';

const InvestForm = () => {
  const [tweetId, setTweetId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/invest', { tweetId, amount });
      alert('Investment made successfully!');
      setTweetId('');
      setAmount('');
    } catch (error) {
      console.error('Error submitting investment:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="invest-form">
      <input
        type="text"
        placeholder="Tweet ID"
        value={tweetId}
        onChange={(e) => setTweetId(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Investment Amount (in ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Invest</button>
    </form>
  );
};

export default InvestForm;
