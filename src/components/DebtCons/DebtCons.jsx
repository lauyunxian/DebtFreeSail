import React from 'react';
import styles from './DebtCons.module.css';

import Plans from './Plans';
import InterestCalculator from './Calculator';

import pic from '../../../assets/images.png';
import humanCartoon from '../../../assets/humanCartoon.png';
import arrow from '../../../assets/arrow.png';

function DebtCons() {
    return (
        <div>
            <h1 className={styles.title} style={{fontFamily:'fantasy', paddingLeft:'100px'}}>Debt Consolidation</h1>
            <div className={styles.inLine}>
                <p className={styles.text} style={{fontFamily: 'monospace'}}>
                At Debt Free Sail, we pride ourselves on expertise tailored to your financial needs. Our experienced
                advisors craft personalized strategies to tackle debt, improve credit scores, and secure your financial
                future. With a commitment to transparency and ethical practices, we provide results-driven solutions that
                prioritize your financial well-being. From comprehensive services to ongoing support, we're dedicated to 
                guiding you towards a debt-free and financially secure tomorrow. Choose Debt Free Sailor and take the 
                first step towards financial freedom today!
                </p>
            </div>

            <h1 className={styles.title} style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>Key Benefits</h1>
            <center><div className={styles.container1}>
                <div className={styles.imageTextWrapper}>
                    <div className={styles.imageTextItem}>
                        <img src={pic} alt="Image 1" className={styles.roundImage} />
                        <div className={styles.textContainer}>
                            <p style={{color:'black'}}>9% interest/ annum</p>
                        </div>
                    </div>
                    <div className={styles.imageTextItem}>
                        <img src={pic} alt="Image 2" className={styles.roundImage} />
                        <div className={styles.textContainer}>
                            <p style={{color:'black'}}>Simplified payment</p>
                        </div>
                    </div>
                    <div className={styles.imageTextItem}>
                        <img src={pic} alt="Image 3" className={styles.roundImage} />
                        <div className={styles.textContainer}>
                            <p style={{color:'black'}}>Save extra every month</p>
                        </div>
                    </div>
                    <div className={styles.imageTextItem}>
                        <img src={pic} alt="Image 4" className={styles.roundImage} />
                        <div className={styles.textContainer}>
                            <p style={{color:'black'}}>Flexible repayment option</p>
                        </div>
                    </div>
                </div>
            </div></center>

            <h1 className={styles.title} style={{fontFamily:'fantasy', textAlign:'center', paddingBottom:'30px'}}>Rewards from this program</h1>
            <center><div className={styles.container2}>
                <div className={styles.imageTextWrapper}>
                    <div className={styles.imageTextItem}>
                        <img src={pic} alt="Image 5" className={styles.roundImage} />
                        <div className={styles.textContainer}>
                            <p style={{color:'black'}}>First priority for our investment opportunity</p>
                        </div>
                    </div>
                    <div className={styles.imageTextItem}>
                        <img src={pic} alt="Image 6" className={styles.roundImage} />
                        <div className={styles.textContainer}>
                            <p style={{color:'black'}}>10% rebate on your 11th month installment per annum</p>
                        </div>
                    </div>
                    <div className={styles.imageTextItem}>
                        <img src={pic} alt="Image 7" className={styles.roundImage} />
                        <div className={styles.textContainer}>
                            <p style={{color:'black'}}>Potential for saving money in a long term</p>
                        </div>
                    </div>
                </div>
            </div></center>

            <h1 className={styles.title} style={{fontFamily:'fantasy', textAlign:'center', paddingBottom:'30px'}}>Find the perfect plan for you</h1>
            <Plans />

            <h1 className={styles.title} style={{fontFamily:'fantasy', textAlign:'center'}}>We settle your DEBTS !!</h1>
            <h1 className={styles.title} style={{fontFamily:'fantasy', textAlign:'center', paddingTop:'0px'}}>How this works ?</h1>
            <p style={{textAlign:'center', color:'white', paddingBottom:'30px'}}>Let's look at the example below:</p>
            <center><div className={styles.container1}>
                <div className={styles.imageTextItem}>
                    <h3 style={{color:'white', paddingBottom:'20px'}}>Debt Holder</h3>
                    <img src={humanCartoon} alt="Human Cartoon 1" style={{height:'280px'}}/>
                    <div className={styles.textContainer} style={{width:'300px', height:'200px'}}>
                        <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                            <li style={{color:'black', textAlign:'left', paddingBottom: '20px'}}>Name: Steve</li>
                            <li style={{color:'black', textAlign:'left', paddingBottom: '20px'}}>Outstanding Debt: RM 50, 000</li>
                            <li style={{color:'black', textAlign:'left'}}>Monthly Installment: RM 2, 000</li>
                        </ul>
                    </div>
                </div>
                <img src={arrow} alt="Arrow" style={{height:'100px'}}/>
                <div className={styles.imageTextItem}>
                    <h3 style={{color:'white', paddingBottom:'20px'}}>Debt Free Sailor</h3>
                    <img src={humanCartoon} alt="Human Cartoon 2" style={{height:'280px'}}/>
                    <div className={styles.textContainer} style={{width:'350px', height:'200px'}}>
                        <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                            <li style={{color:'black', textAlign:'left', paddingBottom: '8px'}}>Interest Rate: 9%</li>
                            <li style={{color:'black', textAlign:'left', paddingBottom: '8px'}}>Tenure: 5 years (optional)</li>
                            <li style={{color:'black', textAlign:'left', paddingBottom: '8px'}}>Amount Applied: RM 50, 000</li>
                            <li style={{color:'black', textAlign:'left', paddingBottom: '8px'}}>Interest Charged: RM 22, 500</li>
                            <li style={{color:'black', textAlign:'left', paddingBottom: '8px'}}>Repayment Amount: RM 72, 300</li>
                            <li style={{color:'black', textAlign:'left'}}>Monthly Installment: RM 1, 208.33</li>
                        </ul>
                    </div>
                </div>
            </div></center>

            <br />
            <br />
            <br />

            <h1 className={styles.title} style={{fontFamily:'fantasy', textAlign:'center', paddingTop:'0px'}}>Comparison</h1>
            <p style={{textAlign:'center', color:'white', paddingBottom:'30px'}}>Take a look at the comparison!</p>

            <center><div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.textContainer} style={{backgroundColor:'black', width:'130px', position:'relative', right:'15px'}}>
                        <h3 style={{color:'white'}}>BEFORE</h3>
                    </div>
                    <ul style={{listStyleType:'none', paddingTop:'15px'}}>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'15px'}}>Monthly Installment: RM 2, 000</li>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'15px'}}>Saved: RM 0</li>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'15px'}}>Rebate: 0%</li>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'15px'}}>Credit Counselling: NO</li>
                        <li style={{color:'black', textAlign:'left'}}>Investment Counselling: NO</li>
                    </ul>
                </div>

                <div classname={styles.innerContainer}>
                    <div className={styles.textContainer} style={{backgroundColor:'black', width:'130px', position:'relative', right:'100px'}}>
                        <h3 style={{color:'white'}}>AFTER</h3>
                    </div>
                    <ul style={{listStyleType:'none', paddingTop:'15px'}}>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'11px'}}>Monthly Installment: RM 1, 208.33</li>
                        <li style={{color:'black', textAlign:'left'}}>Saved: </li>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'11px'}}>RM 2, 000 - RM 1, 208.33 = RM 791.67 (39.5%)</li>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'11px'}}>Rebate: 10% on 11th month annually</li>
                        <li style={{color:'black', textAlign:'left', paddingBottom:'11px'}}>Credit Counselling: Free of Charge</li>
                        <li style={{color:'black', textAlign:'left'}}>Investment Counselling: YES</li>
                    </ul>
                </div>
            </div></center>
            
            <br />
            <br />
            <br />

            <h1 className={styles.title} style={{fontFamily:'fantasy', textAlign:'center', paddingTop:'0px'}}>Calculator & Result</h1>
            <p style={{textAlign:'center', color:'white', paddingBottom:'30px'}}>Count your debt repayment by entering the amount and tenure</p>

            <InterestCalculator />

            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );  
}

export default DebtCons;