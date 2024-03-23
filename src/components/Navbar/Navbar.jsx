import React from 'react';
import image from '../../../assets/images.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <img src = {image} alt="logo" style={{height:'65px'}}/>
                    <a href="/#">Debt Free Sail</a>
                </div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul className="nav-links">
                    <label htmlFor="close-btn" className="btn close-btn">
                        <i className="fas fa-times"></i>
                    </label>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li>
                        <a className="desktop-item">What We Offer</a>
                        <input type="checkbox" id="showDrop" />
                        <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
                        <ul className="drop-menu">
                            <li><a href="/debt-consolidation" style={{fontSize:'17px'}}>Debt Consolidation</a></li>
                            <li><a href="/investment-scheme" style={{fontSize:'17px'}}>Investment Scheme</a></li>
                            <li><a href="/financial-education" style={{fontSize:'17px'}}>Financial Education</a></li>
                            <li><a href="/credit-counsellor" style={{fontSize:'17px'}}>Credit Counsellor</a></li>
                            <li><a href="/investment-pool" style={{fontSize:'17px'}}>Investment Pool</a></li>
                        </ul>
                    </li>
                <li><a href="/contact-us">Contact Us</a></li>
                </ul>
                <label for="menu-btn" class="btn menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
            </div>
        </nav>
    );
}

export default Navbar;