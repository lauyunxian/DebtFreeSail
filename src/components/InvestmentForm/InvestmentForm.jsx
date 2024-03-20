import React from 'react'
import styles from './InvestmentForm.module.css'

const InvestmentForm = () => {
  return (
    <div>
            <center>
                <h1 style={{ fontFamily: 'fantasy' }}>Congratulations on your first step !!</h1>
                <p style={{ fontSize: '25px', color: 'white', fontFamily: 'fantasy', paddingTop: '10px' }}>We are here to guide you</p>
                <p style={{ paddingTop: '35px', color: 'white' }}>Send your application to us and our team will get back to you</p>
            </center>

            <center>
                <div className={styles.container} style={{ display: 'flex', marginTop: '10px' }}>
                    <div className={styles.ctaForm} style={{ flex: 3, paddingRight: '20px' }}>
                        <h2 style={{ color: 'black' }}>Fill out the form!</h2>
                    </div>
                    <form className={styles.form} style={{ flex: 1 }}>
                        <input type="text" placeholder="Name" className={styles.formInput} id="name" />
                        <label htmlFor="name" className={styles.formLabel}>Name</label>

                        <input type="email" placeholder="Email" className={styles.formInput} id="email" />
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                    </form>
                </div>

                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalLogo}>
                            <span className={styles.logoCircle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="var(--primary-color)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                    <path fill="none" d="M0 0h24v24H0V0z" />
                                </svg>
                            </span>
                        </div>
                        <button className={styles.btnClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="var(--secondary-color)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                <path fill="none" d="M0 0h24v24H0V0z" />
                            </svg>
                        </button>
                    </div>
                    <div className={styles.modalBody}>
                        <h2 className={styles.modalTitle}>Upload your IC</h2>
                        <p className={styles.modalDescription}>Attach your IC below</p>
                        <button className={styles.uploadArea}>
                            <span className={styles.uploadAreaIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="var(--primary-color)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                    <path fill="none" d="M0 0h24v24H0V0z" />
                                </svg>
                            </span>
                            <span className={styles.uploadAreaTitle}>Drag file(s) here to upload.</span>
                            <span className={styles.uploadAreaDescription}>
                                Alternatively, you can select a file by <br /><strong>clicking here</strong>
                            </span>
                        </button>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className={styles.btnSecondary}>Cancel</button>
                        <button className={styles.btnPrimary}>Upload File</button>
                    </div>
                </div>
            </center>
        </div>
  )
}

export default InvestmentForm