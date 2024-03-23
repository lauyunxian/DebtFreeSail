import React from 'react';
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    return (
        <section style={{ height: '100%', width: '100%' }}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.contactWrapper}>
                {/* Left contact page */}
                <form className={styles.formHorizontal}>
                    <div className={styles.formGroup}>
                        <div className={styles.colSmall}>
                            <input type="text" className={styles.formControl} id="name" placeholder="NAME" name="name" value="" required />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.colSmall}>
                            <input type="email" className={styles.formControl} id="email" placeholder="EMAIL" name="name" value="" required />
                        </div>
                    </div>

                    <textarea name="message" className={styles.formControl} id="message" rows="10" style={{ marginTop: '10px', color: 'black' }} placeholder='MESSAGE' required></textarea>

                    <button id='submit' type='submit' value='SEND' className={styles.sendBtn}>
                        <div className={styles.altSendBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" height='50px' width='50px' viewBox="0 0 512 512"><path fill='#ffffff' d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                            <span className={styles.sendText} style={{ color: 'white' }}>SEND</span>
                        </div>
                    </button>
                </form>

                {/* Right contact page */}
                <div className={styles.directContactList}>
                    <ul className={styles.contactList}>
                        <li className={styles.listItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width='29px' height='29px' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                            <span className={styles.contactText} style={{ marginLeft: '62px', color: 'white' }}>Port Klang, Selangor</span>
                        </li>

                        <li className={styles.contactList}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="29" width="29" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            <span className={styles.contactText} style={{ marginLeft: '56px' }}><a href="tel:1-212-555-5555" style={{ color: 'white' }} title='Give me a call'>+6016-210 4287</a></span>
                        </li>

                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height='29' width='29' viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                            <span className={styles.contactText} style={{ marginLeft: '53px' }}><a href="mailto:#" style={{ color: 'white' }} title="Send me an email">hitmeup@gmail.com</a></span>
                        </li>
                    </ul>

                    {/* Copyright */}
                    <hr style={{ color: 'white' }} />
                    <div className={styles.copyright} style={{ color: 'white' }}>&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsForm;