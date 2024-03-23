import React from 'react';
import styles from './ProgressBar.module.css';

function ProgressBar() {
  return (
    <section>
      <center>
        <h1 className={styles.title} style={{ marginBottom: '10px' }}>Investment Pool</h1>
      </center>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.percent} style={{ '--num': '85' }} data-text='22993'>
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
            <div className={styles.number}>
              <h2>85<span>%</span></h2>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.percent} style={{ '--num': '57' }} data-text='22994'>
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
            <div className={styles.number}>
              <h2>57<span>%</span></h2>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.percent} style={{ '--num': '30' }} data-text='22993'>
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
            <div className={styles.number}>
              <h2>30<span>%</span></h2>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.percent} style={{ '--num': '85' }} data-text='22994'>
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
            <div className={styles.number}>
              <h2>85<span>%</span></h2>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.percent} style={{ '--num': '90' }} data-text='22994'>
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
            <div className={styles.number}>
              <h2>90<span>%</span></h2>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.percent} style={{ '--num': '71' }} data-text='22993'>
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
            <div className={styles.number}>
              <h2>71<span>%</span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgressBar;