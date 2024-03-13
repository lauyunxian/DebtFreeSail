import React from 'react';
import image from '../../../assets/whoweare.jpeg';
import FirstDiagram from './FirstDiagram';
import SecondDiagram from './SecondDiagram';
import styles from './About.module.css';

function About() {
    return (
        <div>
            <h1 className={styles.title} style={{fontFamily:'fantasy', paddingTop: '70px', paddingLeft: '100px'}}>Who We Are ?</h1>
            <div className={styles.inLine}>
                <ul>
                    <li className={styles.text} style={{fontFamily: 'monospace'}}>
                    We are driven by a mission to empower individuals to achieve financial freedom 
                    while delivering exceptional returns to our investors.
                    </li>

                    <li className={styles.text} style={{fontFamily: 'monospace'}}>
                    Founded by a team of experienced credit counselors and financial experts, we have developed a 
                    pioneering debt settlement service that revolutionized the industry while priortizing the well-being 
                    of our clients and stakeholders.
                    </li>
                </ul>

                <img src={image} alt="Profile Picture" className={styles.rectanImage} />
            </div>

            <center><h1 className={styles.title} style={{fontFamily:'fantasy', paddingTop:'50px'}}>What Set Us Apart ?</h1></center>
            <FirstDiagram />

            <center><h1 className={styles.title} style={{fontFamily:'fantasy'}}>Our Commitment to Stakeholders</h1></center>
            <SecondDiagram />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
}

export default About;