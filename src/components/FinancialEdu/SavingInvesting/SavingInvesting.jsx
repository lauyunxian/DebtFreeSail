import React from 'react';
import '../FinancialEdu.css';
import styles from '../../About/About.module.css';

function SavingInvestment() {
  return (
    <div>
        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'80px'}}>Why Saving and Investing Matters?</h1>
        <center><div className='container'>
            <div className='innerContainer'>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Buiding Wealth</p>
                </div>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Achieving financial goals</p>
                </div>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Protecting against uncertainity</p>
                </div>
            </div>
        </div></center>
    
        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px'}}>Saving Strategies</h1>
        <center><div className='container'>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1436470915/vector/financial-advice-of-personal-consultant-for-consumers.jpg?s=612x612&w=0&k=20&c=oP9q2Pgxc5CEzu_kvc2bU5HzAtJKI6xOGgESKMs7Kis=" style={{width:'200px', marginTop:'60px'}}/>
                        <h2>Pay yourself first</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Allocate a portion of your income to savings before paying bills or discretionary spending.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a style={{background:"#7ec9de"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1160035888/photo/white-ladders-leaning-on-a-target-on-blue-wall.jpg?s=612x612&w=0&k=20&c=LX0e1cB23UzKMBXCkk4TORs5BzwQkuBADs89xHUB4Yo=" style={{width:'180px', marginTop:'60px'}}/>
                        <h2>Set Clear Goals</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Define your short-term and long-term financial goals, such as creating an emergency fund,
                            saving for a vacation, or buying a home.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a style={{background:"#14d6d6"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1345961779/vector/success-salary-payment-automatic-or-recurring-pay-schedule-agenda-done-on-calendar-and.jpg?s=612x612&w=0&k=20&c=ZsQiQ9EZK25S-34lI57LZTNM5pArPx2zQ-whcf08ahU=" style={{width:'185px', marginTop:'60px'}}/>
                        <h2>Automate Savings</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Set up automatic transfers from your checking account to your savings account to 
                            ensure consistent saving habits.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div></center>

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px', paddingBottom:'50px'}}>Types of Investments</h1>
        <div className={styles.flowDiagram}>
            <div className={styles.line}></div>
            <div className={styles.point} style={{ top: '10%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(12% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'110px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Stocks <br /> </h2>
                    <p className={styles.containerText}>
                        Represent ownership in a company and offer the potential for high returns but come with 
                        higher risk.
                    </p>
                </div>
            </div>

            <div className={styles.point} style={{ top: '40%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'110px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Bonds<br /> </h2>
                    <p className={styles.containerText}>
                        Issued by governments or corporations, bonds provide regular interest payments and are generally
                        less volatile than stocks.
                    </p>
                </div>
            </div>
            
            <div className={styles.point} style={{ top: '70%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(81% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'130px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Mutual Funds and ETFs<br /> </h2>
                    <p className={styles.containerText}>
                        These investment vehicles pool money from multiple investors to invest in a diversified 
                        portfolio of stocks, bonds, or other assets.
                    </p>
                </div>
            </div>  

            <div className={styles.point} style={{ top: '99%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'105px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Real Estate<br /> </h2>
                    <p className={styles.containerText}>
                        Investing in properties can provide rental income and potential appreciation in value over time.
                    </p>
                </div>
            </div>  
        </div>

        <br />
        <br />
        <br />
        <br />

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px'}}>Getting Started</h1>
        <center><div className='container'>
            <div className="card-container"> 
                <div className='card'>
                    <a style={{background:"#95dfe2"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1218524115/vector/student-following-online-courses-on-her-computer-at-home.jpg?s=612x612&w=0&k=20&c=qTqq5Ufq1Lycli_o5K63L73OaV1uJ0C-RJi0c2OgcSo=" style={{width:'185px', marginTop:'60px'}}/>
                        <h2>Educate Yourself</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Take time to learn about different investment options, risk tolerance, and investment strategies.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a style={{background:'#ecdcc3'}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1365511379/vector/student-loan-calculation-education-budget-allocation-university-expense-and-debt-pay-off-or.jpg?s=612x612&w=0&k=20&c=Qp46L35rj3lX25CFCOxBmHZMSBU-HFT_p_OZ0ZhDVPY=" style={{width:'200px', marginTop:'60px'}}/>
                        <h2>Set Up Investment Account</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Open a brokerage account or retirement account (such as a 401(k) or IRA) to start investing.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1390058178/vector/growth-plant-stage-contour-silhouette-one-continuous-line-drawing-step-of-tree-growth.jpg?s=612x612&w=0&k=20&c=l_97F1fDdB_gOKVAAyKGKgfJwd5drZsk5rReFwE4YoA=" style={{width:'180px', marginTop:'60px'}}/>
                        <h2>Start Small</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Begin with an amount you're comfortable with and gradually increase your investments 
                            as you gain confidence and financial stability.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div></center>

    </div>
  );
}

export default SavingInvestment;