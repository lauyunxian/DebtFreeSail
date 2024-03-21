import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  const navigate = useNavigate();

  // Funtion to handle login button
  const handleLoginBtn = () => {
    navigate('/login');
  }

  // Function to handle signup button
  const handleSignUpBtn = () => {
    navigate('/signup');
  }
  return (
    <div>
      <body>
        <section className={styles.container}>
          <div className={styles.container__grid}>
            <img src="../../../assets/bg-dots.png" alt="bg" className={styles.bg__1} />
            <img src="../../../assets/bg-dots.png" alt="bg" className={styles.bg__2} />
            <img src="../../../assets/bg-dots.png" alt="bg" className={styles.bg__3} />
            <div className={styles.container__image}>
              <div></div>
            </div>
            <div className={styles.container__content} style={{ paddingLeft: '35px' }}>
              <h1>Set Sail Towards Debt Freedom</h1>
              <h2>Navigate Your Way to Financial Independence</h2>
              <p>
                Our vision is to become the trusted partner in financial wellness, making financial freedom
                attainable for all and our mission is to empower individuals to achieve financial freedom
                through expert guidance and personalized solutions.
              </p>
              <div className={styles.btns}>
                <button className={styles.loginBtn} onClick={handleLoginBtn}>Login</button>
                <button className={styles.signupBtn} onClick={handleSignUpBtn}>Sign Up</button>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Landing;

