import React from 'react';
import './Plans.css';

function Plans() {
    return (
        <center><div className='container'>
          <div className="card-container"> 
            <div className="card">
                <a href="/application-form">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoDebt.jpg" alt="LogoOne" style={{width:'180px', height:'150px'}}/>
                    <h2>Customized Debt Management Plan</h2>
                </div>
                <div className="card--hover">
                    <ul>
                        <li>Personalized debt assessment</li>
                        <li>Tailored debt consolidation plan based on customer's goal, budget & debt profile</li>
                        <li>Flexible repayment terms</li>
                        <li>Free Counselling & Educational resources</li>
                        <li>Ongoing support to track debt</li>
                    </ul>
                </div>
                </a>
                <div className="card--border"></div>
            </div>
          </div>

          <div className="card-container"> 
            <div className="card">
                <a href="/application-form">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoFinancial.jpg" alt="LogoTwo" style={{width:'185px'}}/>
                    <h2>Comprehensive Financial Wellness Plan</h2>
                </div>
                <div className="card--hover">
                    <ul>
                        <li>Personalized debt assessment</li>
                        <li>Tailored debt consolidation plan based on customer's goal, budget & debt profile</li>
                        <li>Flexible repayment terms</li>
                        <li>Free Counselling & Educational resources</li>
                        <li>Ongoing support to track debt</li>
                    </ul>
                </div>
                </a>
                <div className="card--border"></div>
            </div>
          </div>

          <div className="card-container"> 
            <div className="card">
                <a href="/application-form">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoEmergency.jpg" alt="LogoThree" />
                    <h2>Emergency Relief Consolidation Plan</h2>
                </div>
                <div className="card--hover">
                    <ul>
                        <li>Job loss/ medical expenses</li>
                        <li>Temporary Financial Seatbacks</li>
                        <li>Emergency funds/ short-term loans to cover essential expenses while restructing debts</li>
                        <li>Free Counselling & Educational resources</li>
                    </ul>
                </div>
                </a>
                <div className="card--border"></div>
            </div>
          </div>
          
          <div className="card-container"> 
            <div className="card">
                <a href="/application-form">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoReduction.jpg" alt="LogoFour" />
                    <h2>Gradual Debt Reduction Plan</h2>
                </div><div className="card--hover">
                    <ul>
                        <li>Gradual debt reduction by customized repayment plan with customer budget</li>
                        <li>Debt consolidation focusing on long-term debt and interest reduction</li>
                        <li>Flexible repayment terms that adjust as finances improve</li>
                        <li>Financial coaching to enhance money management and prevent debt</li>
                        <li>Incentives for reaching debt reduction goals, fostering financial discipline</li>
                    </ul>
                </div>
                </a>
                <div className="card--border"></div>
            </div>
          </div>
        </div></center>
    );
}

export default Plans;