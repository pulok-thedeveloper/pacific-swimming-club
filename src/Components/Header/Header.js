import React from 'react';
import './Header.css'
import logo from '../../logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <img className='logo' src={logo} alt="" />
            <h1>PACIFIC SWIMMING CLUB</h1>
        </div>
    );
};

export default Header;