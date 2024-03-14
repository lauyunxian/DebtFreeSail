import React from "react";
import styles from "./DebtCons.module.css";

function Statistic() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`${styles['col-xl-6']} ${styles['col-lg-6']}`}>
                        <div className={`${styles.card} ${styles['l-bg-blue-dark']}`}>
                            <div className={`${styles['card-statistic-3']} ${styles.p4}`}>
                                <div className={`${styles['card-icon']} ${styles['card-icon-large']}`}><i className="fas fa-users"></i></div>
                                <div className={styles.mb4}>
                                    <h5 className={`${styles['card-title']} ${styles.mb0}`}>Customers</h5>
                                </div>
                                <div className={`${styles.row} ${styles['align-items-center']} ${styles.mb2} ${styles.dFlex}`}>
                                    <div className="col-8">
                                        <h2 className={`${styles['d-flex']} ${styles['align-items-center']} ${styles.mb0}`}>
                                            15.07k
                                        </h2>
                                    </div>
                                    <div className="col-4 text-right">
                                        <span>9.23% <i className="fa fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div className={`${styles.progress} ${styles.mt1}`} data-height="8" style={{ height: '8px' }}>
                                    <div className={`${styles['progress-bar']} ${styles['l-bg-green']}`} role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['col-xl-6']} ${styles['col-lg-6']}`}>
                        <div className={`${styles.card} ${styles['l-bg-green-dark']}`}>
                            <div className={`${styles['card-statistic-3']} ${styles.p4}`}>
                                <div className={`${styles['card-icon']} ${styles['card-icon-large']}`}><i className="fas fa-ticket-alt"></i></div>
                                <div className={styles.mb4}>
                                    <h5 className={`${styles['card-title']} ${styles.mb0}`}>Ticket Resolved</h5>
                                </div>
                                <div className={`${styles.row} ${styles['align-items-center']} ${styles.mb2} ${styles.dFlex}`}>
                                    <div className="col-8">
                                        <h2 className={`${styles['d-flex']} ${styles['align-items-center']} ${styles.mb0}`}>
                                            578
                                        </h2>
                                    </div>
                                    <div className="col-4 text-right">
                                        <span>10% <i className="fa fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div className={`${styles.progress} ${styles.mt1}`} data-height="8" style={{ height: '8px' }}>
                                    <div className={`${styles['progress-bar']} ${styles['l-bg-orange']}`} role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;

