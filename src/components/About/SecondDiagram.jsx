import React from 'react';
import styles from './About.module.css';

function SecondDiagram() {
    return (
        <div className={styles.flowDiagram}>
            <div className={styles.line}></div>
            <div className={styles.point} style={{ top: '25%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(12% - 60px)', right: '100%', transform: 'translateX(-5%)', height: '185px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Transparency and Trustworthines <br /> </h2>
                    <p className={styles.containerText}>
                        We vow to uphold transparency by openly communicating our financial services, practices, 
                        and performance. Through this, we aim to build trust and lasting relationships based on 
                        integrity and reliability, ensuring stakeholders' confidence in our operations.
                    </p>
                </div>
            </div>

            <div className={styles.point} style={{ top: '60%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(51% - 60px)', left: '350%', transform: 'translateX(-1%)', height: '185px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '13px 0 7px 0' }}>Empowerment through Education <br /> </h2>
                    <p className={styles.containerText}>
                        We prioritize financial education to equip stakeholders with the knowledge and skills for 
                        successful financial management. Through accessible resources and personalized guidance, 
                        we enable informed decision-making and support towards lasting financial freedom.
                    </p>
                </div>
            </div>
            
            <div className={styles.point} style={{ top: '99%' }}>
                <div className={styles.diagramContainer} style={{ top: 'calc(81% - 60px)', right: '100%', transform: 'translateX(-5%)', height: '185px'}}>
                    <h2 className={styles.containerTitle} style={{ padding: '20px 0 7px 0' }}>Tailored Solutions and Support <br /> </h2>
                    <p className={styles.containerText}>
                        We offer personalized solutions and steadfast support, acknowledging diverse financial 
                        circumstances. By understanding stakeholders' unique needs and providing expert guidance, we 
                        help them overcome challenges and progress towards financial wellness goals.
                    </p>
                </div>
            </div>  
        </div>
    );
}

export default SecondDiagram;



