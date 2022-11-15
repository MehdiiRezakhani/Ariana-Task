import React from 'react';
//media
import Logo from '../Media/ArianaLogo.png'
//style
import  '../Styles/dist/Footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="https://arianalabs.io/" target="_blank" rel="noreferrer">
                <img alt="logo" src={Logo} />
            </a>
            <p>COPYRIGHT © 2022 DEVELOPED BY <a href="https://mehdirezakhani.ir" target="_blank" rel="noreferrer">MehdiRezakhani</a></p>
            <h5><a href="https://github.com/MehdiiRezakhani/Ariana-Task" target="_blank" rel="noreferrer">View Source</a></h5>
        </footer>
    );
};

export default Footer;