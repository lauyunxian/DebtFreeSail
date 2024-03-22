import React from "react";
import "../FinancialEdu/FinancialEdu.css";
import styles from "./CreditCouns.module.css";

function CreditCouns(){
    return(
        <div>
            <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'80px'}}>Why Credit Management Matters?</h1>
            <center><div className='container'>
                <div className='innerContainer'>
                    <div className='textContainer' style={{width:'420px'}}>
                        <p style={{color:'black'}}>Buiding Trust</p>
                    </div>
                    <div className='textContainer' style={{width:'420px'}}>
                        <p style={{color:'black'}}>Improving Access to Capital</p>
                    </div>
                    <div className='textContainer' style={{width:'420px'}}>
                        <p style={{color:'black'}}>Cash Flow Management</p>
                    </div>
                </div>
            </div></center>

            {/* <div className={styles.main-block}>
                <div className={styles.left-part}>
                    <i className="fas fa-graduation-cap"></i>
                    <h1>Register to our courses</h1>
                    <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>
                    <div className={styles['btn-group']}>
                        <a className={styles['btn-item']} href="https://www.w3docs.com/learn-html.html">Learn HTML</a>
                        <a className={styles['btn-item']} href="https://www.w3docs.com/quiz/#">Select Quiz</a>
                    </div>
                </div>
                <form action="/">
                    <div className={styles.title}>
                        <i className="fas fa-pencil-alt"></i> 
                        <h2>Register here</h2>
                    </div>
                    <div className={styles.info}>
                        <input className={styles.fname} type="text" name="name" placeholder="Full name" />
                        <input type="text" name="name" placeholder="Email" />
                        <input type="text" name="name" placeholder="Phone number" />
                        <input type="password" name="name" placeholder="Password" />
                        <select>
                            <option value="course-type" selected>Course type*</option>
                            <option value="short-courses">Short courses</option>
                            <option value="featured-courses">Featured courses</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="diploma">Diploma</option>
                            <option value="certificate">Certificate</option>
                            <option value="masters-degree">Masters degree</option>
                            <option value="postgraduate">Postgraduate</option>
                        </select>
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="checkbox" /><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">Privacy Poalicy for W3Docs.</a></span>
                    </div>
                    <button type="submit" href="/">Submit</button>
                </form>
            </div> */}
        </div>
    );
}

export default CreditCouns;
