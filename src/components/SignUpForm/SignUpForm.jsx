import React from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
    return (
        <div className={styles.signupContainer} style={{ backgroundColor: 'white', borderRadius: '10px', marginTop: '10px', maxWidth: '597.5px' }}>
            <center>
                <form>
                    <h1 className={styles.title} style={{ paddingTop: '20px', color: 'black' }}>SIGN UP</h1>
                    <div className={styles.icon} style={{ paddingTop: '30px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height='120px' width='120px' viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.container}>
                            <label htmlFor="uname"><strong style={{ color: 'black' }}>Username</strong></label>
                            <input type="text" placeholder="Enter Username" name="uname" required />

                            <label htmlFor="mail"><strong style={{color: 'black'}}>E-mail</strong></label>
                            <input type="text" placeholder="Enter E-mail" name="mail" required />

                            <label htmlFor="psw"><strong style={{ color: 'black' }}>Password</strong></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label htmlFor="confirmPsw"><strong style={{ color: 'black' }}>Confirm Password</strong></label>
                            <input type="password" placeholder="Confirm Your Password" name="confirmPsw" required />
                        </div>
                        <button type="submit"><strong style={{ color: 'white' }}>SIGN UP</strong></button>
                        <div className={styles.container} style={{ backgroundColor: '#eee', paddingBottom: '50px', height: '52px' }}>
                            <label style={{ paddingLeft: '15px' }}>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                            <span className={styles.psw}><a href="/login" style={{color: '#0000EE'}}>Already have an account?</a></span>
                        </div>
                    </div>
                </form>
            </center>
        </div>
    )
}

export default SignUpForm