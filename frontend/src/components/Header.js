import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import logo
import Logo from '../images/logo.png';

class Header extends Component {
    render() {
        return <header>
            <ul>
                <li><Link to='/Home' id="company"><img src={Logo} alt="logo" /></Link></li>
            </ul>
        </header>
    };
};

export default Header;