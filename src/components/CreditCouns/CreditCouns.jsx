import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FinancialEdu/FinancialEdu.css";
import styles from "./CreditCouns.module.css";

function CreditCouns(){

    const handleSubmit = (event) => {
        event.preventDefault();

        toast.success("A credit counselor will contact you soon.", {
            position: "bottom-center",
            autoClose: 3000 
        });
    };
    
    return(
        <div>
            <h1 className='title' style={{fontFamily:'fantasy', fontSize:'30px', textAlign:'center', paddingTop:'80px'}}>Why Credit Counselling Matters?</h1>
            <center><div className='container'>
                <div className='innerContainer'>
                    <div className='textContainer' style={{width:'400px'}}>
                        <p style={{color:'black'}}>Debt Management Strategies</p>
                    </div>
                    <div className='textContainer' style={{width:'350px'}}>
                        <p style={{color:'black'}}>Stress Reduction</p>
                    </div>
                    <div className='textContainer' style={{width:'400px'}}>
                        <p style={{color:'black'}}>Avoidance of Bankruptcy</p>
                    </div>
                </div>
            </div></center>
            <center><div className='container'>
                <div className='innerContainer' style={{width:'58%'}}>
                    <div className='textContainer' style={{width:'380px'}}>
                        <p style={{color:'black'}}>Negotiation with Creditors</p>
                    </div>
                    <div className='textContainer' style={{width:'350px'}}>
                        <p style={{color:'black'}}>Credit Score Improvement</p>
                    </div>
                </div>
            </div></center>

            <br />
            <br />
            <br />

            <center><div className={styles.form}>
                <div className={styles.title}>Connect with a credit counsellor</div>
                <div className={styles.subtitle}>Take a Step Towards Financial Wellness</div>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles["input-container"]} ${styles.ic1}`}>
                        <input id="firstname" className={styles.input} type="text" placeholder="  First Name" required/>
                    </div>
                    <div className={`${styles["input-container"]} ${styles.ic2}`}>
                        <input id="lastname" className={styles.input} type="text" placeholder="   Last Name"  required/>
                    </div>
                    <div className={`${styles["input-container"]} ${styles.ic2}`}>
                        <input id="email" className={styles.input} type="text" placeholder="   Email" />
                    </div>
                    <div className={`${styles["input-container"]} ${styles.ic2}`}>
                        <input id="phoneno" className={styles.input} type="text" placeholder="   Phone Number" required/>
                    </div>
                    <div className={`${styles["input-container"]} ${styles.ic2}`}>
                        <input id="reason" className={styles.input} type="text" placeholder="   Reason for seeking counselling" />
                    </div>
                    <button type="text" className={styles.submit} style={{width:"250px"}}>submit</button>
                </form>
            </div></center>

            <ToastContainer />
        </div>
    );
}

export default CreditCouns;
