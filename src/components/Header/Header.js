import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my rest countries</h1>
            <div className='header'>
                <a href="/home">Home</a>
                <a href="/country">Country</a>
                <a href="/about">About Us</a>
            </div>
        </div>
    );
};

export default Header;