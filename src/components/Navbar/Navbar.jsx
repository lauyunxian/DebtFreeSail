import React from 'react';
import logoImage from '../../../assets/images.png';
import styles from './Navbar.module.css';

function Navbar() {
    const Menus = ["Debt Solution", "Investment Scheme", "Financial Education", "Credit Counsellor"];

    return (
        <div className={styles.content}>
            <div className={styles.inLine}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logoImage} alt="Profile Picture" className={styles.roundImage} />
                    <a className={styles.title} href="/#" style={{ fontSize: '30px', fontWeight: '300',  textDecoration: 'none', marginTop: '-8px'}}>Debt Free Sail</a>
                </div>

                <div>
                    <a href="/home" className={styles.element}>Home</a>
                    <a href="/about" className={styles.element}>About Us</a>
                    <div className={styles.dropdown}>
                        <a href="/#" className={styles.element}>What We Offer</a>
                        <div className={styles.dropdownContent}>
                            {Menus.map((menu, index) => (
                                <a key={index} href={`/${menu.toLowerCase().replace(' ', '-')}`} className={styles.dropdownItem}>{menu}</a>
                            ))}
                        </div>
                    </div>
                    <a href="/#" className={styles.element}>Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

