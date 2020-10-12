import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './CSS/navbar.css';

// this will give percentage of page scrolled -> "--scroll" is value of percentage scrolled
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight -window.innerHeight));
}, false);

const logoHeaderStyle = {
    color: 'white',
    fontSize: 36,
};

function Navbar() {
    // just setting up variables here
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // arrow function with two parameters
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='progress'></div>
                    <h1 className='my-beautiful-name'>
                           Benson Fan
                        </h1>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                                <a href = "mailto: benson.fan0@gmail.com"><i className="fa fa-envelope-square" style={logoHeaderStyle}></i></a>
                                <p className='sub-title'>benson.fan0@gmail.com</p>
                        </li>
                        <li className='nav-item'>
                                <a href="https://github.com/bensonfan0" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" style={logoHeaderStyle}></i></a>
                                <p className="sub-title">github.com/bensonfan0</p>
                        </li>
                        <li className='nav-item'>
                                <i className="fa fa-phone" style={logoHeaderStyle}></i>
                                <p className='sub-title'>778 - 869 - 1632</p>
                        </li>
                    </ul>
                </div>
            </nav>
            
    )
}

export default Navbar;
