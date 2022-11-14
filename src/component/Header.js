import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <Link to='/'>Home</Link><br/>
            <Link to='/show-result'>view</Link>
        </header>
    );
};

export default Header;