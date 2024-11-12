import React, { useState } from 'react';

const CalculateInvestment = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [days, setDays] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [finalAmount, setFinalAmount] = useState(null);

  // Function to calculate the final amount using simple interest formula
  const calculateAmount = (principal, rate, time) => {
    const timeInYears = time / 365; // Converting days to years
    return principal * (1 + (rate * timeInYears) / 100);
  };

  // Handler for calculation
  const handleCalculate = (event) => {
    event.preventDefault();

    const principal = parseFloat(initialAmount);
    const rate = parseFloat(interestRate);
    const time = parseInt(days);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const amount = calculateAmount(principal, rate, time);
    setFinalAmount(amount.toFixed(2)); // Formatting to 2 decimal places
  };

  return (
    <div className="calculate-investment">
      <h2>Calculate Investment Amount</h2>
      <form onSubmit={handleCalculate}>
        <input
          type="number"
          placeholder="Enter Initial Amount (ETH)"
          value={initialAmount}
          onChange={(e) => setInitialAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {finalAmount !== null && (
        <h3>Final Amount after {days} days: {finalAmount} ETH</h3>
      )}
    </div>
  );
};

export default CalculateInvestment;
