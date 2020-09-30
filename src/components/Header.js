import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <div className="navBar">
            <div className="headerBrand">
                <span>MICHAEL LEE</span>
            </div>
            <div className="headerItem">
                <NavLink to="/" className="navItem"> Home  || </NavLink>
                <NavLink to="/about" className="navItem">  About || </NavLink>
                <NavLink to="/portfolio" className="navItem">  Portfolio  || </NavLink>
                <NavLink to="/contact" className="navItem"> Contact </NavLink>
            </div>
        </div>
    );
}

export default Header;
