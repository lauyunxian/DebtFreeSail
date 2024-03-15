import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div class="wrapper">
                <div class="logo">
                    <a href="/#">Debt Free Sail</a>
                </div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul class="nav-links">
                    <label for="close-btn" class="btn close-btn">
                        <i class="fas fa-times"></i>
                    </label>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li>
                        <a class="desktop-item">What We Offer</a>
                        <input type="checkbox" id="showDrop" />
                        <label for="showDrop" class="mobile-item">Dropdown Menu</label>
                        <ul class="drop-menu">
                            <li><a href="/debt-consolidation">Debt Consolidation</a></li>
                            <li><a href="/investment-scheme">Investment Scheme</a></li>
                            <li><a href="/financial-education">Financial Education</a></li>
                            <li><a href="/credit-counsellor">Credit Counsellor</a></li>
                        </ul>
                    </li>
                <li><a href="/#">Contact Us</a></li>
                </ul>
                <label for="menu-btn" class="btn menu-btn">
                    <i class="fas fa-bars"></i>
                </label>
            </div>
        </nav>
    );
}

export default Navbar;