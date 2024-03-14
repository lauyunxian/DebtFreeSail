import React, { useState } from 'react';
import styles from './DebtCons.module.css';

function InterestCalculator() {
    const [amount, setAmount] = useState('');
    const [interest, setInterest] = useState(9);
    const [result, setResult] = useState(0);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const calculateInterest = () => {
        const parsedAmount = parseFloat(amount);
        if (!isNaN(parsedAmount)) {
            const calculatedResult = parsedAmount * (interest / 100);
            setResult(calculatedResult);
        } else {
            setResult(0);
        }
    };

    return (
        <center><div style={{ backgroundColor: 'white', padding: '20px', width:'900px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'left'}}>
            <div>
                <label htmlFor="amount">Enter Amount: </label>
                <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
            </div>
            <p>Interest: 9%</p>
            <button onClick={calculateInterest}>Calculate</button>
            <div>
                <p>Interest Result:</p>
                <p>{result.toFixed(2)}</p>
            </div>
        </div></center>
    );
}

export default InterestCalculator;
