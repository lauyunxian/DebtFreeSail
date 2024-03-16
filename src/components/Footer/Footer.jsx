import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div>
            <div className={styles.content}>
                <div style={{ backgroundColor: '#333232', padding: '18px', borderRadius: '20px' }}>
                    <div className={styles.inLine} style={{ padding: '1px' }}>
                        <h2 className={styles.text} style={{color: '#00C2FF', flex: '1.3'}}>Location</h2>
                        <h2 className={styles.text} style={{color: '#00C2FF', flex: '1'}}>Contact</h2>
                        <h2 className={styles.text} style={{color: '#00C2FF', flex: '1'}}>Services</h2>
                        <h2 className={styles.text} style={{color: '#00C2FF', flex: '1'}}>Follow</h2>
                    </div>

                    <div className={styles.inLine} style={{ padding: '2px' }}>
                        <p className={styles.text} style={{ flex: '1.3', fontSize: '20px' }}>
                        KS 5 33 & 35, Jalan Selat Selatan       <br />
                        7/K05 Taman Perindustrian Sebena Jaya   <br />
                        42000 Port Klang, Selangor
                        </p>

                        <p className={styles.text} style={{ flex: '1', fontSize: '20px' }}>
                        +603-3162 6320 <br />
                        +6016-210 4287 <br />
                        debtsailfree@gmail.com.my
                        </p>

                        <p className={styles.text} style={{ flex: '1', fontSize: '20px' }}>
                        Product Consulatition <br />
                        Debt Solution         <br />
                        Investment Scheme
                        </p>

                        <p className={styles.text} style={{ flex: '1', fontSize: '20px' }}>
                        Insta: DebtFreeSail
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;