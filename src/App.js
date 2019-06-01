import React from 'react';
import DataView from './components/DataView.js'
import Navbar from './components/Navbar.js'
import './App.css';

const App = () => {
  const component = new React.Component()
  
  component.render = () => {
    return (
      <div className="App">
        <Navbar/>
        <h1 className="header">Earn More, Pay Less? Average Housing Costs and Incomes by NYC Borough</h1>
  
        <DataView
          borough="Brooklyn"
          renterCost="$14,292"
          ownerCost="$29,752"/>
      </div>
    );
  }
  
  return component
}

export default App;
