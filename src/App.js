import React from 'react';
import InvestForm from './components/InvestForm';
import InvestmentList from './components/InvestmentList';
import CalculateInvestment from './components/CalculateInvestment';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Twitter Prediction Market</h1>
      <InvestForm />
      <CalculateInvestment />
      <InvestmentList />
    </div>
  );
}

export default App;
