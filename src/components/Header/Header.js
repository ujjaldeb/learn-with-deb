import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="container-fluid">
            <div>
                <span>learnWithDeb</span>
            </div>
            {/* Navigation menu */}
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