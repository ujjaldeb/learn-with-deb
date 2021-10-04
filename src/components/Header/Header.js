import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div>
                <span>learnWithDeb</span>
            </div>
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
        </nav>
    );
};

export default Header;