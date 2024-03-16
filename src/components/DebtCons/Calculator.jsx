import React, { useState } from 'react';

function InterestCalculator() {
    const [amount, setAmount] = useState('');
    const [tenure, setTenure] = useState('');
    const [result, setResult] = useState(0);
    const [repaymentPerMonth, setRepaymentPerMonth] = useState(0);
    const [interestAmount, setInterestAmount] = useState(0);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleTenureChange = (event) => {
        setTenure(event.target.value);
    };

    const calculateInterest = () => {
        const parsedAmount = parseFloat(amount);
        const parsedTenure = parseFloat(tenure);
        if (!isNaN(parsedAmount) && !isNaN(parsedTenure)) {
            const calculatedResult = parsedAmount * 1.09;
            setResult(calculatedResult);

            const calculatedInterestAmount = parsedAmount * 0.09; 
            setInterestAmount(calculatedInterestAmount);

            const calculatedRepaymentPerMonth = calculatedResult / (parsedTenure * 12); 
            setRepaymentPerMonth(calculatedRepaymentPerMonth);
        } else {
            setResult(0);
            setRepaymentPerMonth(0);
            setInterestAmount(0);
        }
    };

    return (
        <center>
            <div style={{ backgroundColor:'white', padding:'20px', width:'750px', borderRadius:'10px', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)', textAlign:'left' }}>
                <div style={{paddingBottom:'20px'}}>
                    <label htmlFor="amount" style={{color:'black', fontSize:'20px'}}>Amount: RM </label>
                    <input type="number" id="amount" value={amount} onChange={handleAmountChange} style={{color:'black', fontSize:'18px'}}/>
                </div>

                <div style={{paddingBottom:'20px'}}>
                    <label htmlFor="tenure" style={{color:'black', fontSize:'20px'}}>Tenure (years): </label>
                    <input type="number" id="tenure" value={tenure} onChange={handleTenureChange} style={{color:'black', fontSize:'18px'}}/>
                </div>

                <p style={{ paddingBottom:'10px', color:'black', fontSize:'20px'}}>Interest: 9%</p>
                
                <div style={{ paddingBottom:'10px'}}>
                    <p style={{ color:'black', fontSize:'20px'}}>Interest Amount:</p>
                    <p style={{ paddingBottom:'10px', color:'black', fontSize:'18px'}}>RM {interestAmount.toFixed(2)}</p>

                    <p style={{ color:'black', fontSize:'20px'}}>Total Amount Include Interest:</p>
                    <p style={{ paddingBottom:'10px', color:'black', fontSize:'18px'}}>RM {result.toFixed(2)}</p>

                    <p style={{ color:'black', fontSize:'20px'}}>Repayment Per Month:</p>
                    <p style={{ paddingBottom:'10px', color:'black', fontSize:'18px'}}>RM {repaymentPerMonth.toFixed(2)}</p>
                </div>

                <button onClick={calculateInterest} style={{ 
                    padding: '10px 20px', 
                    color: 'white', 
                    fontSize: '18px',
                    backgroundColor: '#00C2FF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease-in-out',
                }}>
                Calculate
                </button>
            </div>
        </center>
    );
}

export default InterestCalculator;
