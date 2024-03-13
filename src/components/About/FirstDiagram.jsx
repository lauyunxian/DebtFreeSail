import React from 'react';
import styles from './About.module.css';
import expertise from '../../../assets/tech.webp';
import innovation from '../../../assets/innovation.jpg';
import compassion from '../../../assets/compassion.jpg';

function FirstDiagram() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.card} style={{backgroundColor: '#FFFAF0'}}>
                    <div className={styles.image}>
                        <img src={expertise} alt="Expertise" />
                    </div>
                    <div className={styles.content}>
                        <h3 style={{ color: "black" }}>Expertise</h3>
                        <p style={{ color: "black" }}>
                        Our seasoned credit counselors utilize years of industry expertise and deep knowledge of 
                        debt settlement strategies to negotiate favorable outcomes for our clients and investors.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.card} style={{backgroundColor: 'beige'}}>
                    <div className={styles.image}>
                        <img src={innovation} alt="Sample" />
                    </div>
                    <div className={styles.content}>
                        <h3 style={{ color: "black" }}>Innovation</h3>
                        <p style={{ color: "black" }}>  
                        We lead debt settlement with cutting-edge technology and data analytics. Our user-friendly 
                        platform empowers clients to track progress and make informed financial decisions 
                        effortlessly.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.card} style={{backgroundColor: 'lightgrey'}}>
                    <div className={styles.image}>
                        <img src={compassion} alt="Sample" />
                    </div>
                    <div className={styles.content}>
                        <h3 style={{ color: "black" }}>Compassion</h3>
                        <p style={{ color: "black" }}> 
                        We understand that each financial journey is unique. With empathy and respect, we
                        support clients throughout the debt settlement process, fostering trust and collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstDiagram;


