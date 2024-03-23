import React from 'react';
import '../FinancialEdu.css';
import styles from '../../About/About.module.css';

function Credit() {
  return (
    <div>
        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'80px'}}>Why Credit Management Matters?</h1>
        <center><div className='container'>
            <div className='innerContainer'>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Buiding Trust</p>
                </div>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Improving Access to Capital</p>
                </div>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Cash Flow Management</p>
                </div>
            </div>
        </div></center>
    
        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px'}}>Using Credit Wisely</h1>
        <center><div className='container'>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1253540887/vector/revenue-flat-line-icon-outline-vector-symbol-illustration.jpg?s=612x612&w=0&k=20&c=NiIDFZ6ij5k4hIXGBGI7-eQhckC9RSO0oaQduhWReno=" style={{width:'180px', marginTop:'60px'}}/>
                        <h2>Budget Responsibly</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Use credit as a tool to manage cash flow and cover expenses, but avoid relying on 
                            credit to fund a lifestyle beyond your means.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1186903009/vector/loyalty-card-incentive-program-vector-icon-set-earn-bonus-points-for-purchase-discount.jpg?s=612x612&w=0&k=20&c=8Yg5krTThD06Jvj9B2pn00sLUv7BGjyw0fuY4FeOu2U=" style={{width:'200px', marginTop:'60px'}}/>
                        <h2>Be Mindful of Credit Card Rewards</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            While credit card rewards can be enticing, make sure not to overspend or carry a 
                            balance that accrues interest just to earn rewards.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1138894771/vector/loan-timing-icon-time-and-interest-icon-clock-and-percent-sign-banking-finance-concept.jpg?s=612x612&w=0&k=20&c=LmFK77G_V1TPLoytbhMnLgNGGSm6wTMO8TjcLb4quR4=" style={{width:'185px', marginTop:'60px'}}/>
                        <h2>Be Strategic with Loans</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Before taking out a loan, consider the terms and interest rates carefully. Only 
                            borrow what you can afford to repay.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div></center>

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px', paddingBottom:'50px'}}>Improve Credit Score</h1>
        <div className={styles.flowDiagram}>
            <div className={styles.line}></div>
            <div className={styles.point} style={{ top: '10%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(12% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'130px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Pay Your Bills on Time <br /> </h2>
                    <p className={styles.containerText}>
                        Payment history is the most significant factor in your credit score. Make sure to pay all 
                        your bills on time to avoid negative marks on your credit report.
                    </p>
                </div>
            </div>

            <div className={styles.point} style={{ top: '40%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'130x'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Reduce Credit Card Balances<br /> </h2>
                    <p className={styles.containerText}>
                        Aim to keep your credit card balances low relative to your credit limits. High credit 
                        utilization can negatively impact your credit score.
                    </p>
                </div>
            </div>
            
            <div className={styles.point} style={{ top: '70%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(81% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'130px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Limit New Credit Applications<br /> </h2>
                    <p className={styles.containerText}>
                        Each time you apply for new credit, a hard inquiry is recorded on your credit report, which 
                        can temporarily lower your credit score.
                    </p>
                </div>
            </div>  

            <div className={styles.point} style={{ top: '99%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'130px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Monitor Your Credit Report<br /> </h2>
                    <p className={styles.containerText}>
                        Regularly review your credit report for inaccuracies or fraudulent activity. You're 
                        entitled to one free credit report from each of the three major credit bureaus annually.
                    </p>
                </div>
            </div>  
        </div>

        <br />
        <br />
        <br />
        <br />

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px'}}>Improving Your Credit Score</h1>
        <center><div className='container'>
            <div className="card-container"> 
                <div className='card'>
                    <a style={{background:"#8c92e6"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1406124833/vector/problems-in-communication-vector-concept.jpg?s=612x612&w=0&k=20&c=Bc_PujLiEKfNOOuI0A2TYG-phmBhu6z4WgHaVEsPnR8=" style={{width:'185px', marginTop:'60px'}}/>
                        <h2>Communicate with Creditors</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            If you're experiencing financial difficulties, contact your creditors to discuss 
                            payment options or hardship programs.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a style={{background:'#ded9d6'}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1405977490/photo/the-words-debt-free-in-process-are-standing-next-to-the-loading-bar-ending-credit-payments.jpg?s=612x612&w=0&k=20&c=ScWbkfI2K8wljrEwGsvEsQUahHW1ENjjApKVXKCw7jk=" style={{width:'200px', marginTop:'60px'}}/>
                        <h2>Seek Credit Counselling</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Credit counselling agencies can provide guidance on managing debt, creating a budget, 
                            and improving your financial situation.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1307462661/vector/scam-alert-geometric-badge-with-exclamation-mark-modern-vector-illustration.jpg?s=612x612&w=0&k=20&c=jzgHD3XbE6KG7uYUfz43DZIY5mjSX2qzsZdCDMWMOGM=" style={{width:'180px', marginTop:'60px'}}/>
                        <h2>Avoid Credit Repair Scams</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Be cautious of companies promising to "fix" your credit for a fee. Many of these 
                            services are scams and may end up worsening your credit situation.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div></center>

    </div>
  );
}

export default Credit;