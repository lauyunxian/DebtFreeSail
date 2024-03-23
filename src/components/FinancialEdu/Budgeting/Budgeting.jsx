import React from 'react';
import '../FinancialEdu.css';
import styles from '../../About/About.module.css';

function Budgeting() {
  return (
    <div>
        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'80px'}}>Why Budgeting Matters?</h1>
        <center><div className='container'>
            <div className='innerContainer'>
                <div className='textContainer' style={{width:'350px'}}>
                    <p style={{color:'black', fontSize:'15.5px'}}>Take control of your finances</p>
                </div>
                <div className='textContainer' style={{width:'470px'}}>
                    <p style={{color:'black', fontSize:'14.8px'}}>Identify areas where you can save money</p>
                </div>
                <div className='textContainer' style={{width:'380px'}}>
                    <p style={{color:'black', fontSize:'15px'}}>Reach your financial goals faster</p>
                </div>
            </div>
        </div></center>
        <center><div className='container'>
            <div className='innerContainer' style={{width:'65%'}}>
                <div className='textContainer' style={{width:'380px'}}>
                    <p style={{color:'black', fontSize:'15px'}}>Avoid overspending and accumulating debt</p>
                </div>
                <div className='textContainer' style={{width:'350px'}}>
                    <p style={{color:'black', fontSize:'15px'}}>Reduce stress and anxiety about money</p>
                </div>
            </div>
        </div></center>

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px'}}>Key Components of a Budget</h1>
        <center><div className='container'>
            <div className="card-container"> 
                <div className="card">
                    <a style={{background:"#dbd3d1"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1352492264/vector/money-rain-hands-holding-a-wallet-with-paper-currency-and-metal-coins.jpg?s=612x612&w=0&k=20&c=p8LzE0piseN58-iXe9EufCDmuYBacR-5gEPEo4eJfEM=" alt="LogoOne" style={{width:'180px', marginTop:'60px'}}/>
                        <h2>Income</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Start by calculating your total monthly income, including salaries, wages, bonuses, and any other 
                            sources of income.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1152081940/vector/business-woman-is-climbing-stairs-from-stacks-of-coins-toward-his-financial-goal-personal.jpg?s=612x612&w=0&k=20&c=N17ckJMRfYLXflg5RGc63yEng7GOlmIIEumddo0pIBw=" alt="LogoThree" style={{width:'200px', marginTop:'60px'}}/>
                        <h2>Saving Goals</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Allocate a portion of your income to savings goals, such as emergency 
                            fund, retirement savings, or future purchases.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a style={{background:"#d3d2e2"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1325721913/vector/businessman-turning-quality-meter-arrow-back-with-rope-vector-isometric-illustration-price.jpg?s=612x612&w=0&k=20&c=eegFy858GeYgGlnzLjxpcYmWtALHGScAik35UWGbSIY=" alt="LogoTwo" style={{width:'185px', marginTop:'60px'}}/>
                        <h2>Expenses</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            List all your expenses, including fixed expenses (such as rent/mortgage, 
                            utilities, insurance) and variable expenses (such as groceries, dining out, entertainment).
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div></center>

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px', paddingBottom:'50px'}}>Tips for Creating Budgets</h1>
        <div className={styles.flowDiagram}>
            <div className={styles.line}></div>
            <div className={styles.point} style={{ top: '10%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(12% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'110px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Track your spending <br /> </h2>
                    <p className={styles.containerText}>
                        Keep track of all your expenses for a month to understand where your money is going.
                    </p>
                </div>
            </div>

            <div className={styles.point} style={{ top: '30%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'105px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Set Realistic Goals<br /> </h2>
                    <p className={styles.containerText}>
                        Be realistic when setting your budgeting goals. Start small and gradually increase your savings targets.
                    </p>
                </div>
            </div>
            
            <div className={styles.point} style={{ top: '53%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(81% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'110px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Prioritize Expenses<br /> </h2>
                    <p className={styles.containerText}>
                        Differentiate between needs and wants. Prioritize essential expenses and cut back on discretionary
                        spending if neccessary.
                    </p>
                </div>
            </div>  

            <div className={styles.point} style={{ top: '75%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'110px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Use Budgeting Tools<br /> </h2>
                    <p className={styles.containerText}>
                        Utilize budgeting apps, spreadsheets, or pen and paper to create and monitor your budget.
                    </p>
                </div>
            </div>  

            <div className={styles.point} style={{ top: '99%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(81% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'130px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Review and Adjust Regularly <br /> </h2>
                    <p className={styles.containerText}>
                        Regularly review your budget and make adjustments as needed. Life circumstances and financial goals may change 
                        over time.
                    </p>
                </div>
            </div>  
        </div>

        <br />
        <br />
        <br />
        <br />

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px'}}>Common Budgeting Mistakes to Avoid</h1>
        <center><div className='container'>
            <div className="card-container"> 
                <div className='card'>
                    <a style={{background:"#ecdcc3"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1367300565/vector/emergency-fund-backup-plan-for-crisis-time-money-or-savings-when-losing-job-accident-or.jpg?s=612x612&w=0&k=20&c=RzG2t-H10EPP7U3YdQ2IWfcoECYIca7Fvt8-FXAMFo4=" alt="LogoTwo" style={{width:'185px', marginTop:'60px'}}/>
                        <h2>Ignoring Emergency Fund</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Build an emergency fund to cover unexpected expenses and prevent dipping into 
                            savings or accumulating debt.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1283821519/vector/energetic-businessman-with-red-tie-running-up-the-arrow-vector-illustration.jpg?s=612x612&w=0&k=20&c=X8nE9L-TPvsfBaadoJMQ2Uq3Uztlcz9yjT7Z0C3X2Jg=" alt="LogoThree" style={{width:'200px', marginTop:'60px'}}/>
                        <h2>Overestimating Income</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Be conservative when estimating your income to avoid falling short on your budget.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a style={{background:"#dbd3d1"}}>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1357760621/vector/financial-concept-spending-money-hand-holding-a-paper-receipt-a-customer-at-the-supermarket.jpg?s=612x612&w=0&k=20&c=bBdwx1fudNYbAH9LUVtmuGLVsBBHTQIJwJrF4LV-w9M=" style={{width:'180px', marginTop:'60px'}}/>
                        <h2>Not Tracking Expenses</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Ignoring small expenses can add up quickly and derail your budget.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div></center>

    </div>
  );
}

export default Budgeting;