import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import './App.css';



const App = () => {
  return (
    <div className="calculator-wrapper">
      <div className="content-row">
        <CalculatorDisplay />
      </div>
      <div className="content-row">
        <ActionButton name="clear" size="large"/>
        <ActionButton name="÷" size="small"/>
      </div>
      <div className="content-row">
        <NumberButton name="7" size="small"/>
        <NumberButton name="8" size="small"/>
        <NumberButton name="9" size="small"/>
        <ActionButton name="×" size="small"/>
      </div>
      <div className="content-row">
        <NumberButton name="4" size="small"/>
        <NumberButton name="5" size="small"/>
        <NumberButton name="6" size="small"/>
        <ActionButton name="-" size="small"/>
      </div>
      <div className="content-row">
        <NumberButton name="1" size="small"/>
        <NumberButton name="2" size="small"/>
        <NumberButton name="3" size="small"/>
        <ActionButton name="+" size="small"/>
      </div>
      <div className="content-row">
        <NumberButton name="0" size="large"/>
        <ActionButton name="=" size="small"/>
      </div>
    </div>
  );
};

export default App;
