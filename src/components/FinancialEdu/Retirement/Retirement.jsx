import React from 'react';
import '../FinancialEdu.css';
import styles from '../../About/About.module.css';

function Retirement() {
  return (
    <div>
        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'80px'}}>Why Retirement Planning Matters?</h1>
        <center><div className='container'>
            <div className='innerContainer'>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Financial Independence</p>
                </div>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Peace of Mind</p>
                </div>
                <div className='textContainer' style={{width:'400px'}}>
                    <p style={{color:'black'}}>Longevity</p>
                </div>
            </div>
        </div></center>
    
        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px'}}>Key Factors in Retirement Planning</h1>
        <center><div className='container'>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1269861440/vector/dementia-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=LXw5JrLG-HNAgcR96h9ZvLKLj96wnWtn3oFCY9wewcI=" style={{width:'200px', marginTop:'60px'}}/>
                        <h2>Calculate Retirement Needs</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Estimate your retirement expenses, taking into account factors such as housing, 
                            healthcare, travel, and leisure activities.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1270030308/vector/bank-credit-card-bill-payment-verification-audit-of-digital-money-fraud-transaction-vector.jpg?s=612x612&w=0&k=20&c=lbtql4uufDvpX9Udcb9LE3PLdrig27OFpIdEg_jEHF4=" style={{width:'180px', marginTop:'60px'}}/>
                        <h2>Assess Income Sources</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Consider all potential sources of retirement income, including Social Security 
                            benefits, employer-sponsored retirement plans (such as 401(k)s), pensions, and 
                            personal savings.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            <div className="card-container"> 
                <div className="card">
                    <a>
                    <div className="card--display">
                        <img className='logo' src="https://media.istockphoto.com/id/1271507044/vector/happy-senior-couple-sitting-on-bench-in-park.jpg?s=612x612&w=0&k=20&c=o2-jOQnd0jOvNqB4xOGm-fTYUlV6Sx1deqkZNiM2zp4=" style={{width:'185px', marginTop:'60px'}}/>
                        <h2>Determine Retirement Age</h2>
                    </div>
                    <div className="card--hover" style={{height:'40px'}}>
                        <p style={{textAlign:'center', color:'black', paddingTop:'100px'}}>
                            Decide when you want to retire and how long you expect your retirement to last. 
                            Consider factors such as health, longevity, and career aspirations.
                        </p>
                    </div>
                    </a>
                </div>
            </div>
        </div></center>

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'60px', paddingBottom:'50px'}}>Practical Steps for Retirement Planning</h1>
        <div className={styles.flowDiagram}>
            <div className={styles.line}></div>
            <div className={styles.point} style={{ top: '10%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(12% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'110px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Start Early<br /> </h2>
                    <p className={styles.containerText}>
                        The earlier you begin saving for retirement, the more time your 
                        investments have to grow through compounding returns.
                    </p>
                </div>
            </div>

            <div className={styles.point} style={{ top: '40%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'130px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Maximize Retirement Accounts<br /> </h2>
                    <p className={styles.containerText}>
                        Take advantage of employer-sponsored retirement plans, such as 401(k)s or 403(b)s, and 
                        contribute enough to receive any employer matching contributions.
                    </p>
                </div>
            </div>
            
            <div className={styles.point} style={{ top: '70%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(81% - 60px)', right: '100%', transform: 'translateX(-5%)', height:'110px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Diversify Investments<br /> </h2>
                    <p className={styles.containerText}>
                        Spread your investments across different asset classes (stocks, bonds, real estate, etc.) to 
                        reduce risk and optimize returns.
                    </p>
                </div>
            </div>  

            <div className={styles.point} style={{ top: '99%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height:'105px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Review and Adjust<br /> </h2>
                    <p className={styles.containerText}>
                        Regularly review your retirement plan and adjust your savings goals, investment strategy, 
                        and retirement timeline as needed.
                    </p>
                </div>
            </div>  
        </div>

        <br />
        <br />
        <br />
        <br />

    </div>
  );
}

export default Retirement;


