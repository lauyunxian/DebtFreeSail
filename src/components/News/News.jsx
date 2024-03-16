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
              <span className={styles.cardTime}>15 min</span>
            </div>
          </div>
          <div className={styles.cardImg}></div>
          <a href="https://www.moomoo.com/my/learn/detail-guide-for-beginners-investing-in-malaysia-s-stock-market-116953-231135155" className={styles.cardLink}>
            <div className={styles.cardImgHover}></div>
          </a>
          <div className={styles.cardInfo}>
            <span className={styles.cardCategory}>MooMoo Technologies</span>
            <h3 className={styles.cardTitle}>Investing For Beginners</h3>
            <span className={styles.cardBy}>by <a className={styles.cardAuthor} title="author">Celeste Mills</a></span>
          </div>
        </article>

        <article className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardInfoHover}>
            <div className={styles.cardClockInfo}>
              <svg className={styles.cardClock} viewBox="0 0 24 24">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
              </svg>
              <span className={styles.cardTime}>8 min</span>
            </div>
          </div>
          <div className={styles.cardImg}></div>
          <a href="https://www.ceicdata.com/en/indicator/malaysia/household-debt--of-nominal-gdp#:~:text=GDP%20in%202022%3F-,Malaysia%20household%20debt%20accounted%20for%2081.0%20%25%20of%20the%20country's%20Nominal,88.9%20%25%20in%20the%20previous%20year." className={styles.cardLink}>
            <div className={styles.cardImgHover}></div>
          </a>
          <div className={styles.cardInfo}>
            <span className={styles.cardCategory}>Trading Economics</span>
            <h3 className={styles.cardTitle}>Malaysia Household Debt To GDP</h3>
            <span className={styles.cardBy}>by <a className={styles.cardAuthor} title="author">John Doe</a></span>
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
          <a href="https://www.investopedia.com/retirement/retirement-income-planning/" className={styles.cardLink}>
            <div className={styles.cardImgHover}></div>
          </a>
          <div className={styles.cardInfo}>
            <span className={styles.cardCategory}>Investopedia</span>
            <h3 className={styles.cardTitle}>Will Your Retirement Income Be Enough?</h3>
            <span className={styles.cardBy}>by <a className={styles.cardAuthor} title="author">Jean Folger</a></span>
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