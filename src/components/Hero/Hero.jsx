import React from 'react'
import squarePic from '../../../assets/square.png'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContent}>
                <div className={styles.welcomeToComp}>
                    <h1 className={styles.textWelcomeTo}><span className={styles.textWelcome}>Welcome</span> to</h1>
                    <h1 className={styles.compName}>Debt Free Sail</h1>
                </div>
                <p className={styles.textPartner}>Your partner in Financial Wellness</p>
                <div className={styles.visimisi}>
                    <div className={styles.visiDiv}>
                        <p className={styles.visi}><b>Vision</b></p>
                        <p className={styles.description}>Our vision is to become the trusted partner in financial wellness,
                            making financial freedom attainable for all
                        </p>
                    </div>
                    <div className={styles.misiDiv}>
                        <p className={styles.misi}><b>Mission</b></p>
                        <p className={styles.description}>Our mission is to empower individuals to achieve financial freedom
                            through expert guidance and personalized solutions
                        </p>
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className={styles.loginBtn} href="/#">Login</button>
                    <button className={styles.signupBtn} href="/#">Sign Up</button>
                </div>
            </div>
            <div className={styles.media}>
                <img src={squarePic} alt="video here" />
            </div>
        </section>
    )
}

export default Hero