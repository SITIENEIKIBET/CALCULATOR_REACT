import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (display === '0' || operator !== null) {
      setDisplay(number.toString());
    } else {
      setDisplay(display + number.toString());
    }
    setOperator(null);
  };

  const handleOperatorClick = (operator) => {
    if (operator === '=') {
      handleEqualClick();
      return;
    }

    if (operator === 'C') {
      handleClearClick();
      return;
    }

    if (previousValue !== null) {
      handleEqualClick();
      setOperator(operator);
    } else {
      setPreviousValue(parseFloat(display));
      setDisplay('0');
      setOperator(operator);
    }
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(display);
    let result = 0;

    switch (operator) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPreviousValue(result);
    setOperator(null);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={() => handleOperatorClick('=')}>=</button>
          <button onClick={() => handleOperatorClick('C')}>C</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
