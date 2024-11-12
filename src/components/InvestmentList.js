import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvestmentList = () => {
  const [investments, setInvestments] = useState([]);

  const fetchInvestments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/investments');
      setInvestments(response.data);
    } catch (error) {
      console.error('Error fetching investments:', error.message);
    }
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  return (
    <div className="investment-list">
    <h2> All Investment </h2>
      <ul>
        {investments.map((investment) => (
          <li key={investment._id}>
            Tweet ID: {investment.tweetId} | Amount: {investment.amount} ETH
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentList;
