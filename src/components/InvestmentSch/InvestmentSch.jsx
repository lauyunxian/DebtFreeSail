import React from 'react';
import './InvestmentSch.css';

import humanCartoon from '../../../assets/humanCartoon.png';
import arrow from '../../../assets/arrow.png';
import pic from '../../../assets/images.png';
import chart from '../../../assets/chart.png';

function InvestmentSch() {
  return (
    <div className="InvestmentSch">
        <center><h1 style={{ paddingTop:'90px', fontFamily:'Times New Romans'}}>Invest in Our Debt Consolidation Investment Scheme</h1></center>
        <center><h3 style={{fontFamily:'Times New Romans'}}>Secure Returns and Make a Positive Impact</h3></center>
        <center><h2 style={{color:'white', fontFamily:'Times New Romans'}}>6% return / annum</h2></center>

        <br />
        <a href="/#" className="button">Click here to get started</a>

        <div className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>How this works?</div>
        <center><div className='container'>
            <div className='imageTextItem'>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Customer (Debtors)</h3>
                <img src={humanCartoon} alt="Human Cartoon 1" style={{height:'180px'}}/>
                <div className='textContainer' style={{width:'230px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Submit Application</li>
                    </ul>
                </div>
            </div>

            <img src={arrow} className='arrow' alt="Arrow" style={{height:'50px', width:'70px'}}/>

            <div className='imageTextItem'>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Debt Free Sailor</h3>
                <img src={humanCartoon} alt="Human Cartoon 2" style={{height:'180px'}}/>
                <div className='textContainer' style={{width:'230px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Pre Qualification</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Document Collection</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Credit Check and Verification</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Underwriting</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '5px'}}>Decision Making</li>
                    </ul>
                </div>
            </div>

            <img src={arrow} alt="Arrow" style={{height:'50px', width:'70px'}}/>

            <div className='imageTextItem'>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Debt Free Sailor</h3>
                <img src={humanCartoon} alt="Human Cartoon 3" style={{height:'180px'}}/>
                <div className='textContainer' style={{width:'230px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '8px'}}>Opens Investment Pool</li>
                    </ul>
                </div>
            </div>

            <img src={arrow} alt="Arrow" style={{height:'50px', width:'70px'}}/>

            <div className='imageTextItem'>
                <h3 style={{color:'white', paddingBottom:'20px'}}>Investors</h3>
                <img src={humanCartoon} alt="Human Cartoon 4" style={{height:'180px'}}/>
                <div className='textContainer' style={{width:'230px', height:'200px'}}>
                    <ul style={{listStyleType:'none', paddingRight:'40px'}}>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '8px'}}>Submit Application for Investment Quota</li>
                        <li style={{color:'white', textAlign:'left', paddingBottom: '8px'}}>Opens the quota for the investor</li>
                    </ul>
                </div>
            </div>
        </div></center>

        <br />
        <br />
        <br />

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>Range of Customers</h1>
        <center><img src={chart} alt="Chart" style={{width:'70%', height:'auto'}}/></center>
        
        <br />

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>Benefit of Investing In Debt Free Sailor</h1>
        <center><div className='container' style={{margin:'0 auto', paddingTop:'15px'}}>
            <div className='imageTextWrapper'>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 1" className='roundImage' />
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>6% interest / annum</p>
                    </div>
                </div>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 2" className='roundImage' />
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>Monitored by professionals</p>
                    </div>
                </div>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 3" className='roundImage' />
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>Low risk investment</p>
                    </div>
                </div>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 4" className='roundImage' />
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>Reserve slots for more investment opportunity</p>
                    </div>
                </div>
            </div>
        </div></center>

        <br />
        <br />

        <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingBottom:'30px'}}>Why Debt Consolidation is a Promising Consolidation?</h1>
        <center><div className='container' style={{margin:'0 auto', maxWidth:'60%', paddingTop:'15px'}}>
            <div className='imageTextWrapper'>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 1" className='roundImage' style={{marginBottom:'0px'}}/>
                     <div className='textContainer2'>
                        <p style={{color:'white'}}>Steady demand</p>
                    </div>
                </div>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 2" className='roundImage' style={{marginBottom:'0px'}}/>
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>Stable returns</p>
                    </div>
                </div>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 3" className='roundImage' style={{marginBottom:'0px'}}/>
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>Lower risk profile</p>
                    </div>
                </div>
            </div>
        </div></center>

        <center><div className='container' style={{margin:'0 auto', maxWidth:'60%', paddingTop:'30px'}}>
            <div className='imageTextWrapper'>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 1" className='roundImage' style={{marginBottom:'0px'}}/>
                     <div className='textContainer2'>
                        <p style={{color:'white'}}>Diversification</p>
                    </div>
                </div>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 2" className='roundImage' style={{marginBottom:'0px'}}/>
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>Social impact</p>
                    </div>
                </div>
                <div className='imageTextItem'>
                    <img src={pic} alt="Image 3" className='roundImage' style={{marginBottom:'0px'}}/>
                    <div className='textContainer2'>
                        <p style={{color:'white'}}>Potential for growth</p>
                    </div>
                </div>
            </div>
        </div></center>
    </div>
  );
}

export default InvestmentSch;