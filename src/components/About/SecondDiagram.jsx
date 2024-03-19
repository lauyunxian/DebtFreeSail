import React from 'react';
import styles from './About.module.css';

function SecondDiagram() {
    return (
        <div className={styles.flowDiagram}>
            <div className={styles.line}></div>
            <div className={styles.point} style={{ top: '25%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(12% - 60px)', right: '100%', transform: 'translateX(-5%)'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Expertise <br /> </h2>
                    <p className={styles.containerText}>
                        Our seasoned credit counselors utilize years of industry expertise and deep knowledge of 
                        debt settlement strategies to negotiate favorable outcomes for our clients and investors.
                    </p>
                </div>
            </div>

            <div className={styles.point} style={{ top: '60%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height: '150px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Innovation <br /> </h2>
                    <p className={styles.containerText}>
                        We lead the debt settlement industry with cutting-edge technology and data analytics.
                        Our user-friendly platform empowers clients to track progress and make informed
                        financial decision effortlessly.
                    </p>
                </div>
            </div>
            
            <div className={styles.point} style={{ top: '99%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(81% - 60px)', right: '100%', transform: 'translateX(-5%)'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Compassion <br /> </h2>
                    <p className={styles.containerText}>
                        We understand that each financial journey is unique. With empathy and respect, we
                        support clients throughout the debt settlement process, fostering trust and collaboration.
                    </p>
                </div>
            </div>  
        </div>
    );
}

export default SecondDiagram;



