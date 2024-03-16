import React from 'react'
import styles from './Testimonial.module.css'
import starImg from '../../../assets/5StarRating.webp'

const Testimonial = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title} style={{fontFamily:'fantasy', fontWeight:'30', fontSize:'40px'}}>Testimonials</h1>
            <div className={styles.testimonials}>
                <div className={styles.testimonial}>
                    <img src={starImg} alt="star" />
                    <p style={{color:'white', maxWidth:'95%', paddingLeft:'28px', position:'relative', top:'-18px'}}>
                        The personalized ddebt management plan helped me tackle my debts effectively,
                        and their crredit counseling gave me the tools I needed to improve my credit score.
                        Thanks to their expert guidance and support, I'm now on the path to a brighter financial
                        future
                    </p>
                </div>
                <div className={styles.testimonial}>
                    <img src={starImg} alt="star" />
                    <p style={{color:'white', maxWidth:'95%', paddingLeft:'28px', position:'relative', top:'-18px'}}>
                        I can't recommend Debt Free Sail enough! Their investment schemes have provided
                        me with stable returns and peace of mind. The team is knowledgeable responsive,
                        and truly cares about their clients' success. Trusting them with my finances was
                        one of the best decision I've made
                    </p>
                </div>
            </div>

            <br />
            <br />

        </div>
    )
}

export default Testimonial;