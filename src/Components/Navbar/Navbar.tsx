import * as React from 'react';
import Button from '../Button/Button';

import './Navbar.css';

import star from './star.svg';

interface INavbarProps {
    language: any;
}

const Navbar = (props: INavbarProps) => {
    const lang = props.language.NAVBAR;
    return (<div className="navbar">
        <div>
            <img src={star} id="navbar-logo" alt="logo" width={85}/>
        </div>
        <div className="navbar-items">
            <a href="#">{lang.HOW_WORKS}</a>
            <a href="#">{lang.PACKAGES}</a>
            <a href="#">{lang.APP}</a>
            <a href="#">{lang.CONTACT}</a>
        </div>
        <div className="navbar-right">
            <a href="#">{lang.LOGIN}</a>
            <Button>{lang.REGISTER}</Button>
        </div>
    </div>)
}

export default Navbar;