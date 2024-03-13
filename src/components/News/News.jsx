import React from 'react';
import styles from './News.module.css';

function News() {
  return (
    <div>
      <h1 className={styles.title} style={{fontFamily:'fantasy', fontWeight:'30', fontSize:'40px'}}>News and Trends</h1>
      <section className={styles.cards}>
        <article className={`${styles.card} ${styles.card1}`}>
          <div className={styles.cardInfoHover}>
            <div className={styles.cardClockInfo}>
              <svg className={styles.cardClock} viewBox="0 0 24 24">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
              </svg>
              <span className={styles.cardTime}>8 min</span>
            </div>
          </div>
          <div className={styles.cardImg}></div>
          <a href="#" className={styles.cardLink}>
            <div className={styles.cardImgHover}></div>
          </a>
          <div className={styles.cardInfo}>
            <span className={styles.cardCategory}>Asia Stock Markets</span>
            <h3 className={styles.cardTitle}>What's new in the Asian Market?</h3>
            <span className={styles.cardBy}>by <a href="#" className={styles.cardAuthor} title="author">Celeste Mills</a></span>
          </div>
        </article>

        <article className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardInfoHover}>
            <div className={styles.cardClockInfo}>
              <svg className={styles.cardClock} viewBox="0 0 24 24">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
              </svg>
              <span className={styles.cardTime}>15 min</span>
            </div>
          </div>
          <div className={styles.cardImg}></div>
          <a href="#" className={styles.cardLink}>
            <div className={styles.cardImgHover}></div>
          </a>
          <div className={styles.cardInfo}>
            <span className={styles.cardCategory}>Trading Economics</span>
            <h3 className={styles.cardTitle}>Malaysian Household Debt (% of GDP)</h3>
            <span className={styles.cardBy}>by <a href="#" className={styles.cardAuthor} title="author">Asila Jalil</a></span>
          </div>
        </article>

        <article className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardInfoHover}>
            <div className={styles.cardClockInfo}>
              <svg className={styles.cardClock} viewBox="0 0 24 24">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
              </svg>
              <span className={styles.cardTime}>12 min</span>
            </div>
          </div>
          <div className={styles.cardImg}></div>
          <a href="#" className={styles.cardLink}>
            <div className={styles.cardImgHover}></div>
          </a>
          <div className={styles.cardInfo}>
            <span className={styles.cardCategory}>Investopedia</span>
            <h3 className={styles.cardTitle}>Current income vs Retirement income</h3>
            <span className={styles.cardBy}>by <a href="#" className={styles.cardAuthor} title="author">John Doe</a></span>
          </div>
        </article>
      </section>

      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default News;


// import React from 'react'
// import styles from './News.module.css'
// import financialLiteracy from '../../../assets/FinancialLiteracy.webp'

// const News = () => {
//   return (
//     <div className={styles.container}>
//         <h1 className={styles.title}>News & Trends</h1>
//         <div className={styles.cardContainer}>
//             <div className={styles.card}>
//                 <img src={financialLiteracy} alt="News image" />
//                 <p>What's new in the Asian Market?</p>
//                 <button>Learn More</button>
//             </div>
//             <div className={styles.card}>
//                 <img src={financialLiteracy} alt="News image" />
//                 <p>Malaysian Household Debt (% of GDP)</p>
//                 <button>Learn More</button>
//             </div>
//             <div className={styles.card}>
//                 <img src={financialLiteracy} alt="News image" />
//                 <p>Current income vs Retirement income</p>
//                 <button>Learn More</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default News