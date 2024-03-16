import React from "react";
import './FinancialEdu.css';
import styles from './Articles.module.css';

function FinancialEdu() {
    return (
        <div>
            <h1 style={{paddingLeft:'20px', fontFamily:'Times New Romans', paddingTop:"100px"}}>Empower Yourself with Financial Education</h1>
            <p style={{color:'white', paddingLeft:'20px'}}>Learn how to manage yout finances wisely and achieve financial freedom</p>

            <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center'}}>Core Topics</h1>
            <center><div className='container'>
            <div className="card-container"> 
                <a href="/financial-education/budget">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoBudget.jpg" alt="LogoOne" style={{width:'180px', height:'150px'}}/>
                    <h2>Budgeting</h2>
                </div>
                </a>
            </div>
            <div className="card-container"> 
                <a href="financialWellness">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoInvestment.jpg" alt="LogoTwo" style={{width:'185px'}}/>
                    <h2>Saving and Investment</h2>
                </div>
                </a>
            </div>
            <div className="card-container"> 
                <a href="emergencyRelief">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoCredit.png" alt="LogoThree" style={{width:'128px'}}/>
                    <h2>Credit Management</h2>
                </div>
                </a>
            </div>
            <div className="card-container"> 
                <a href="debtReduction">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoRetirement.jpg" alt="LogoFour" />
                    <h2>Retirement Planning</h2>
                </div>
                </a>
            </div>
            </div></center>

            <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center'}}>Videos For You</h1>
            <center><div className='container'>
            <div className="card-container"> 
                <a href="customizedDebt">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoBudget.jpg" alt="LogoOne" style={{width:'180px', height:'150px'}}/>
                    <h2>Budgeting</h2>
                </div>
                </a>
            </div>
            <div className="card-container"> 
                <a href="financialWellness">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoInvestment.jpg" alt="LogoTwo" style={{width:'185px'}}/>
                    <h2>Saving and Investment</h2>
                </div>
                </a>
            </div>
            <div className="card-container"> 
                <a href="emergencyRelief">
                <div className="card--display">
                    <img className='logo' src="../../../assets/logoCredit.png" alt="LogoThree" style={{width:'128px'}}/>
                    <h2>Credit Management</h2>
                </div>
                </a>
            </div>
            </div></center>

            <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'40px'}}>Articles</h1>
            <section className={styles.cards}>
                <article className={`${styles.card} ${styles.card1}`}>
                <div className={styles.cardInfoHover}>
                    <div className={styles.cardClockInfo}>
                    <svg className={styles.cardClock} viewBox="0 0 24 24">
                        <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                    </svg>
                    <span className={styles.cardTime}>10 min</span>
                    </div>
                </div>
                <div className={styles.cardImg}></div>
                <a href="https://www.nerdwallet.com/article/finance/how-to-budget" className={styles.cardLink}>
                    <div className={styles.cardImgHover}></div>
                </a>
                <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle} style={{color:'black'}}>Budgeting 101</h3>
                    <span className={styles.cardBy}>by <a className={styles.cardAuthor} title="author" style={{color:'black'}}>Bev and Lauren</a></span>
                </div>
                </article>

                <article className={`${styles.card} ${styles.card2}`}>
                <div className={styles.cardInfoHover}>
                    <div className={styles.cardClockInfo}>
                    <svg className={styles.cardClock} viewBox="0 0 24 24">
                        <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                    </svg>
                    <span className={styles.cardTime}>9 min</span>
                    </div>
                </div>
                <div className={styles.cardImg}></div>
                <a href="https://dental.tufts.edu/academics/financial-aid/financial-literacy/how-manage-credit-responsibly" className={styles.cardLink}>
                    <div className={styles.cardImgHover}></div>
                </a>
                <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle} style={{color:'black'}}>Manage Credit Responsibly</h3>
                    <span className={styles.cardBy}>by <a className={styles.cardAuthor} title="author" style={{color:'black'}}>Mina Haylen</a></span>
                </div>
                </article>

                <article className={`${styles.card} ${styles.card3}`}>
                <div className={styles.cardInfoHover}>
                    <div className={styles.cardClockInfo}>
                    <svg className={styles.cardClock} viewBox="0 0 24 24">
                        <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                    </svg>
                    <span className={styles.cardTime}>13 min</span>
                    </div>
                </div>
                <div className={styles.cardImg}></div>
                <a href="https://www.investopedia.com/articles/investing/022516/saving-vs-investing-understanding-key-differences.asp" className={styles.cardLink}>
                    <div className={styles.cardImgHover}></div>
                </a>
                <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle} style={{color:'black'}}>Saving vs. Investment</h3>
                    <span className={styles.cardBy}>by <a className={styles.cardAuthor} title="author" style={{color:'black'}}>Adam Hayes</a></span>
                </div>
                </article>
            </section>
        </div> 
    )
};

export default FinancialEdu;