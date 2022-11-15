import React from 'react';
import { Link } from 'react-router-dom';
import Logo from  '../Media/ArianaLogo.png'
//style 
import '../Styles/dist/Header.css';
const Header = () => {
    return (
        <header>
                <Link to='/'>
                    <img src={Logo} alt="Ariana Logo"/>
                </Link>
            <div>
                <Link to='/'>Home</Link><br/>
                <Link to='/show-result'>ViewResult</Link>
            </div>
        </header>
    );
};

export default Header;