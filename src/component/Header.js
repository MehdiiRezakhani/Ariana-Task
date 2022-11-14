import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Media/ArianaLogo.png'
const Header = () => {
    return (
        <header>
            {/* <img src={Logo} alt="Ariana-Logo"/> */}
            <Link to='/'>Home</Link><br/>
            <Link to='/show-result'>view</Link>
        </header>
    );
};

export default Header;