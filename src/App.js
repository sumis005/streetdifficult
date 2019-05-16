import React from 'react';
import DataView from './components/DataView.js'
import Navbar from './components/Navbar.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="header">Earn More, Pay Less? Average Housing Costs and Incomes by NYC Borough</h1>

      <DataView
        borough="Brooklyn"
        renterCost="$14,292"
        ownerCost="$29,752"
        renterIncome="$37,882"
        ownerIncome="$94,177"/>
    </div>
  );
}

export default App;
