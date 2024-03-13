import React from 'react'
import styles from './Offers.module.css'

const Offer = () => {
  return (
    <div>
      <h1 className={styles.title} style={{fontFamily:'fantasy', fontWeight:'30', fontSize:'40px'}}>Our services</h1>
      <div class={styles.container}>
        <div class={styles.box}>
          <span></span>
          <div class={styles.content}>
            <h2>Debt Solution</h2>
            <h3 style={{ fontSize: '1.3em', color: '#b0e0e6', marginBottom: '5px' }}>Break Free Ease</h3>
            <p>Low-Interest solution to settle debt strees-free</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class={styles.box}>
          <span></span>
          <div class={styles.content}>
            <h2>Investment Scheme</h2>
            <h3 style={{ fontSize: '1.3em', color: '#b0e0e6', marginBottom: '5px' }}>Empower Your Finances</h3>
            <p>Navigate debt hurdles with expert guidance</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class={styles.box}>
          <span></span>
          <div class={styles.content}>
            <h2>Credit Counselling</h2>
            <h3 style={{ fontSize: '1.3em', color: '#b0e0e6', marginBottom: '5px' }}>Invest in Freedom</h3>
            <p>Priority returns and peace of mind for debt elimination</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class={styles.box}>
          <span></span>
          <div class={styles.content}>
            <h2>Financial Education</h2>
            <h3 style={{ fontSize: '1.3em', color: '#b0e0e6', marginBottom: '5px' }}>Knowledge is Power</h3>
            <p>Learn, earn and power towards a debt-free future</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;