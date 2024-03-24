import React from 'react';
import styles from './InvestmentSch.module.css';

import debtFreeSailor from '../../../assets/debtFreeSailor.png';
import debtHolder from '../../../assets/debtHolder.png';
import investor from '../../../assets/investor.png';

import arrow from '../../../assets/arrow.png';
import chart from '../../../assets/chart.png';

function InvestmentSch() {
  return (
    <div>
        <center><h1 className={styles.title} style={{ paddingTop:'90px', fontFamily:'Times New Romans'}}>Invest in Our Debt Consolidation Investment Scheme</h1></center>
        <center><h3 style={{fontFamily:'Times New Romans'}}>Secure Returns and Make a Positive Impact</h3></center>
        <center><h2 style={{color:'white', fontFamily:'Times New Romans'}}>6% return / annum</h2></center>

        <br />
        <a href="/investment-form" className={styles.button}>Click here to get started</a>

        <div className={styles.title} style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>How this works?</div>
        <center><div className={styles.container}>
            <div className={styles.imageTextItem}>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Customer (Debtors)</h3>
                <img src={debtHolder} alt="Human Cartoon 1" style={{height:'180px', width:'180px', position:'relative', paddingLeft:'40px'}}/>
                <div className={styles.textContainer} style={{width:'230px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Submit Application</li>
                    </ul>
                </div>
            </div>

            <img src={arrow} className={styles.arrow} alt="Arrow" style={{height:'50px', width:'70px'}}/>

            <div className={styles.imageTextItem}>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Debt Free Sailor</h3>
                <img src={debtFreeSailor} alt="Human Cartoon 2" style={{height:'180px', width:'180px', position:'relative', paddingLeft:'40px'}}/>
                <div className={styles.textContainer} style={{width:'250px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Pre Qualification</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Document Collection</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Credit Check and Verification</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Underwriting</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Decision Making</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '8px'}}>Opens Investment Pool</li>
                    </ul>
                </div>
            </div>

            <img src={arrow} alt="Arrow" style={{height:'50px', width:'70px'}}/>

            <div className={styles.imageTextItem}>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Investors</h3>
                <img src={investor} alt="Human Cartoon 3" style={{height:'180px', width:'180px', position:'relative', paddingLeft:'40px'}}/>
                <div className={styles.textContainer} style={{width:'230px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                    <li style={{color:'white', textAlign:'left', paddingBottom: '8px'}}>Submit application for Investment Quota</li>
                    </ul>
                </div>
            </div>

            <img src={arrow} alt="Arrow" style={{height:'50px', width:'70px'}}/>

            <div className={styles.imageTextItem}>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Debt Free Sailor</h3>
                <img src={debtFreeSailor} alt="Human Cartoon 4" style={{height:'180px', width:'180px', position:'relative', paddingLeft:'40px'}}/>
                <div className={styles.textContainer} style={{width:'230px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '8px'}}>Opens the quota for the investor</li>
                    </ul>
                </div>
            </div>
        </div></center>

        <br />
        <br />
        <br />
        <br />

        <h1 className={styles.title} style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>Range of Customers</h1>
        <center><img src={chart} alt="Chart" style={{width:'70%', height:'auto'}}/></center>
        
        <br />

        <h1 className={styles.title} style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>Benefit of Investing In Debt Free Sailor</h1>
        <center><div className={styles.container} style={{margin:'0 auto', paddingTop:'15px'}}>
            <div className={styles.imageTextWrapper}>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/177516417/photo/percent-arrow-growth-sign.jpg?s=612x612&w=0&k=20&c=iDvpiQbe82H-fD7ORGVDjEyjwBvBaoKFtaCgO9OuM_M=" alt="Image 1" className={styles.roundImage} />
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>6% interest / annum</p>
                    </div>
                </div>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1152863138/vector/tick-icon-vector-symbol-checkmark-isolated-on-white-background-checked-icon-or-correct.jpg?s=612x612&w=0&k=20&c=AudAYTu8rzM92lRktaI0ECJ0RiWrCgUeNEfywZm57SI=" alt="Image 2" className={styles.roundImage} />
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Monitored by professionals</p>
                    </div>
                </div>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1357095325/vector/gauge-indicator-with-left-green-sector-vector-icon.jpg?s=612x612&w=0&k=20&c=Zeaiet6JOppsvhOuaLsyCsJDdneeQIoX1R3MOrSTkng=" alt="Image 3" className={styles.roundImage} />
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Low risk investment</p>
                    </div>
                </div>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1285103851/vector/hand-drawn-doodle-folding-calendar-with-cartoon-art-style-vector-isolated.jpg?s=612x612&w=0&k=20&c=38hGkE4gAtLl-Uz3JD5TYPeln922BG5i4d_zQNqF41s=" alt="Image 4" className={styles.roundImage} />
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Reserve slots for more investment opportunity</p>
                    </div>
                </div>
            </div>
        </div></center>

        <br />
        <br />

        <h1 className={styles.title} style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>Why Debt Consolidation is a Promising Investment?</h1>
        <center><div className={styles.container} style={{margin:'0 auto', maxWidth:'60%', paddingTop:'15px'}}>
            <div className={styles.imageTextWrapper}>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1508853400/vector/order-fulfillment-black-line-fill-vector-icon.jpg?s=612x612&w=0&k=20&c=f_3RpwawUJ4u8q_8-TygkvtirsduYYR54g1kiZF3kuE=" alt="Image 1" className={styles.roundImage} style={{marginBottom:'0px'}}/>
                     <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Steady demand</p>
                    </div>
                </div>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1147247355/vector/audit-services-financial-consulting-money-investment-strategy-idea-line-icon.jpg?s=612x612&w=0&k=20&c=ZDSTpp4xqPLNlANuihg-6zCmvqk9rhntBI2y7WEniLI=" alt="Image 2" className={styles.roundImage} style={{marginBottom:'0px'}}/>
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Stable returns</p>
                    </div>
                </div>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1348120694/vector/lowering-sugar-intake-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=6aYml9R8Xy_oXiy9t-AQXyfbRjXoEHz12UQ5vw9jDFg=" alt="Image 3" className={styles.roundImage} style={{marginBottom:'0px'}}/>
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Lower risk profile</p>
                    </div>
                </div>
            </div>
        </div></center>

        <center><div className={styles.container} style={{margin:'0 auto', maxWidth:'60%', paddingTop:'30px'}}>
            <div className={styles.imageTextWrapper}>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1342347228/vector/stylized-icon-design-with-4-hands-holding-together-thin-line-minimal-illustration-for.jpg?s=612x612&w=0&k=20&c=WH1mDPw0I2UCqEYrrBsbaUfiBA4OjTucYIj4QAW0x30=" alt="Image 1" className={styles.roundImage} style={{marginBottom:'0px'}}/>
                     <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Diversification</p>
                    </div>
                </div>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1169533234/vector/responsibility-line-icon.jpg?s=612x612&w=0&k=20&c=FgyheBPx5A2-khUBbj3OX1nCpMBl4TDBYsAJGSxKmHU=" alt="Image 2" className={styles.roundImage} style={{marginBottom:'0px'}}/>
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Social impact</p>
                    </div>
                </div>
                <div className={styles.imageTextItem}>
                    <img src="https://media.istockphoto.com/id/1183888242/vector/mission-champion-icon-in-flat-style-mountain-vector-illustration-on-white-isolated.jpg?s=612x612&w=0&k=20&c=2GvQqtOQnogdnh9wocsN7FSMcDfRcZiIC2r6_pZld7k=" alt="Image 3" className={styles.roundImage} style={{marginBottom:'0px'}}/>
                    <div className={styles.textContainer2}>
                        <p style={{color:'white'}}>Potential for growth</p>
                    </div>
                </div>
            </div>
        </div></center>
    </div>
  );
}

export default InvestmentSch;